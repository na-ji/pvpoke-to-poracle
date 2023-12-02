# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    227, 703, 108, 184, 379, 308, 226, 279, 288, 630, 748, 980, 207, 62, 260,
    171, 411, 663, 618, 488, 832, 340, 497, 799, 820, 560, 40, 754, 18, 911, 202
  ],
  "top30Ultra": [
    379, 487, 62, 718, 488, 630, 640, 18, 788, 638, 663, 377, 260, 799, 472,
    593, 171, 279, 911, 73, 386, 820, 794, 6, 227, 460, 237, 646, 671, 560, 497,
    699, 709, 939, 658, 365, 3, 618, 154
  ],
  "top30Master": [
    718, 487, 383, 149, 250, 646, 716, 648, 791, 644, 888, 643, 150, 671, 484,
    713, 998, 249, 483, 473, 717, 645, 893, 130, 635, 382, 901, 809, 794, 445,
    485, 649, 889, 376, 784, 640, 381, 145, 260, 384, 639, 768, 638, 464, 151
  ]
}
```
<!-- aliases-end -->

After restarting Poracle, you can easily track those Pokémon like this:
```shell
!track top30Great great1
!track top30Ultra ultra1
```

## Commands
Poracle is able to process track commands in bulk, so you can easily copy and paste those commands to track every Pokémon. 
Also, since legendaries are not always available in the wild, they aren't counted when making the top 30, but still added to the list just in case.

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 227 703 108 184 379 308 226 279 288 630 748 980 207 62 260 171 411 663 618 488 832 340 497 799 820 560 40 754 18 911 202
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 718 488 630 640 18 788 638 663 377 260 799 472 593 171 279 911 73 386 820 794 6 227 460 237 646 671 560 497 699 709 939 658 365 3 618 154
```
<!-- top30ultra-end -->
