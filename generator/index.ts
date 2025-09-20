import fetch from 'node-fetch';
import path from 'path';
import prettier from 'prettier';
import { readFile, writeFile } from 'fs/promises';

enum PokemonTags {
  LEGENDARY = 'legendary',
  MYTHICAL = 'mythical',
  ALOLAN = 'alolan',
  GALARIAN = 'galarian',
  STARTER = 'starter',
  REGIONAL = 'regional',
  SHADOW = 'shadow',
  SHADOW_ELIGIBLE = 'shadoweligible',
  UNTRADEABLE = 'untradeable',
  MEGA = 'mega',
  XS = 'xs',
  HISUIAN = 'hisuian',
  ULTRA_BEAST = 'ultrabeast',
}

interface Pokemon {
  dex: number;
  speciesId: string;
  tags?: PokemonTags[];
}

interface Ranking {
  speciesId: string;
}

const ignoredTags = [PokemonTags.LEGENDARY, PokemonTags.MYTHICAL, PokemonTags.ULTRA_BEAST];

const fetchPokemonList = async (): Promise<Pokemon[]> => {
  console.log('Fetching game master');

  const { pokemon } = (await (
    await fetch('https://raw.githubusercontent.com/pvpoke/pvpoke/refs/heads/master/src/data/gamemaster.min.json', {
      body: null,
      method: 'GET',
    })
  ).json()) as { pokemon: Pokemon[] };

  return pokemon;
};

const pokemonList = await fetchPokemonList();

const fetchRanking = async (rankingName = 'rankings-1500'): Promise<Ranking[]> => {
  console.log(`Fetching ${rankingName}`);

  return (await (
    await fetch(
      `https://raw.githubusercontent.com/pvpoke/pvpoke/refs/heads/master/src/data/rankings/all/overall/${rankingName}.json`,
      {
        body: null,
        method: 'GET',
      },
    )
  ).json()) as Ranking[];
};

const rankingToDexList = (ranking: Ranking[], rankingSize = 30): number[] => {
  let count = 1;

  return (
    ranking
      .slice(0, rankingSize * 2)
      .map((rank) => {
        const pokemon = pokemonList.find((pokemon) => pokemon.speciesId === rank.speciesId);

        if (!pokemon) {
          throw new Error(`Failed to find species ${rank.speciesId}`);
        }

        return pokemon;
      })
      // remove not available in the wild
      .filter((pokemon, index, self) => {
        return !pokemon.tags?.includes(PokemonTags.SHADOW);
      })
      // remove duplicates
      .filter((pokemon, index, self) => {
        return index === self.findIndex((pokemon2) => pokemon2.dex === pokemon.dex);
      })
      // slice by ignoring legendaries
      .filter((pokemon, index) => {
        if (count < rankingSize) {
          if (!pokemon.tags?.some((tag) => ignoredTags.includes(tag))) {
            count++;
          }
          return true;
        }

        return false;
      })
      .map((pokemon) => pokemon.dex)
  );
};

const writeToReadme = async (textToWrite: string, tag: string): Promise<void> => {
  console.log(`Updating readme with ${tag}`);
  const readmePath = path.join(__dirname, '..', 'README.md');
  const readme = await readFile(readmePath, { encoding: 'utf-8' });

  const startTag = `<!-- ${tag}-start -->`;
  const endTag = `<!-- ${tag}-end -->`;
  const replaceRegex = new RegExp(startTag + '([^.]+)' + endTag, 'gm');

  await writeFile(readmePath, readme.replace(replaceRegex, `${startTag}\n${textToWrite}\n${endTag}`));
};

const writeAliases = async (aliases: Record<string, number[]>): Promise<void> => {
  console.log('Writing Pokémon aliases');

  const pokemonAliasPath = path.join(__dirname, '..', 'pokemonAlias.json');

  const aliasesOutput = prettier.format(JSON.stringify(aliases), { parser: 'json' });

  await writeFile(pokemonAliasPath, aliasesOutput);
  await writeToReadme(`\`\`\`json\n${aliasesOutput}\`\`\``, 'aliases');
};

const dexListToPoracleCommands = (dexList: number[], leagueRanking: string): string => {
  return `!track ${leagueRanking} ${dexList.join(' ')}`;
};

const writePoracleCommands = async (poracleCommands: string, fileName: string): Promise<void> => {
  console.log(`Writing commands ${fileName}`);
  const poracleCommandsPath = path.join(__dirname, '..', `${fileName}.txt`);

  await writeFile(poracleCommandsPath, poracleCommands);
  await writeToReadme(`\`\`\`\n${poracleCommands}\n\`\`\``, fileName);
};

const littleLeagueRankings = await fetchRanking('rankings-500');
const greatLeagueRankings = await fetchRanking('rankings-1500');
const ultraLeagueRankings = await fetchRanking('rankings-2500');
const masterLeagueRankings = await fetchRanking('rankings-10000');

await writeAliases({
  top30Little: rankingToDexList(littleLeagueRankings),
  top30Great: rankingToDexList(greatLeagueRankings),
  top30Ultra: rankingToDexList(ultraLeagueRankings),
  top30Master: rankingToDexList(masterLeagueRankings),
});

await writePoracleCommands(dexListToPoracleCommands(rankingToDexList(littleLeagueRankings), 'little1'), 'top30little');
await writePoracleCommands(dexListToPoracleCommands(rankingToDexList(greatLeagueRankings), 'great1'), 'top30great');
await writePoracleCommands(dexListToPoracleCommands(rankingToDexList(ultraLeagueRankings), 'ultra1'), 'top30ultra');
