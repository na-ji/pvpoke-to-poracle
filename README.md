# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    308, 703, 379, 108, 260, 207, 62, 208, 68, 488, 560, 618, 195, 832, 302,
    340, 279, 226, 288, 497, 820, 237, 630, 472, 593, 766, 202, 754, 386, 28,
    184, 377, 660
  ],
  "top30Ultra": [
    379, 208, 638, 488, 377, 718, 487, 260, 640, 820, 788, 699, 832, 630, 62,
    18, 472, 768, 365, 593, 799, 237, 646, 560, 794, 149, 658, 279, 186, 6, 695,
    68, 38, 28, 618, 903, 36, 386, 460, 649, 145, 9, 671
  ],
  "top30Master": [
    718, 487, 383, 149, 716, 644, 150, 646, 648, 384, 643, 791, 888, 671, 130,
    484, 483, 612, 998, 249, 473, 717, 635, 645, 893, 809, 901, 382, 143, 445,
    250, 649, 381, 794, 376, 889, 784, 640, 639, 145, 638, 485, 464, 151, 647,
    713
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
!track great1 308 703 379 108 260 207 62 208 68 488 560 618 195 832 302 340 279 226 288 497 820 237 630 472 593 766 202 754 386 28 184 377 660
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 208 638 488 377 718 487 260 640 820 788 699 832 630 62 18 472 768 365 593 799 237 646 560 794 149 658 279 186 6 695 68 38 28 618 903 36 386 460 649 145 9 671
```
<!-- top30ultra-end -->
