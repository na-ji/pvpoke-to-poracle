# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    108, 379, 488, 703, 260, 288, 171, 411, 630, 184, 308, 227, 226, 618, 799,
    980, 207, 279, 340, 748, 634, 593, 62, 737, 302, 754, 497, 560, 195, 832,
    709
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
!track great1 108 379 488 703 260 288 171 411 630 184 308 227 226 618 799 980 207 279 340 748 634 593 62 737 302 754 497 560 195 832 709
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 718 488 630 640 18 788 638 663 377 260 799 472 593 171 279 911 73 386 820 794 6 227 460 237 646 671 560 497 699 709 939 658 365 3 618 154
```
<!-- top30ultra-end -->
