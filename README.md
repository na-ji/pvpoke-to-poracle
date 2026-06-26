# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    690, 580, 753, 710, 590, 592, 751, 688, 607, 318, 345, 72, 422, 194, 597,
    406, 86, 339, 810, 152, 653, 170, 564, 37, 546, 667, 43, 540, 283
  ],
  "top30Great": [
    778, 463, 959, 334, 395, 195, 593, 205, 38, 222, 160, 189, 980, 823, 22,
    230, 184, 799, 162, 131, 537, 197, 308, 663, 148, 916, 705, 364, 820, 326
  ],
  "top30Ultra": [
    778, 463, 823, 959, 671, 640, 395, 146, 205, 593, 718, 38, 230, 379, 477,
    131, 9, 687, 895, 663, 365, 977, 487, 979, 939, 488, 346, 350, 765, 119,
    208, 260, 160, 867, 36, 181
  ],
  "top30Master": [
    888, 484, 376, 646, 716, 792, 483, 643, 889, 382, 644, 802, 890, 249, 800,
    717, 445, 250, 718, 648, 381, 383, 1000, 671, 791, 809, 647, 385, 150, 468,
    730, 380, 786, 706, 700, 645, 130, 979
  ]
}
```
<!-- aliases-end -->

After restarting Poracle, you can easily track those Pokémon like this:
```shell
!track top30Little little1
!track top30Great great1
!track top30Ultra ultra1
```

## Commands
Poracle is able to process track commands in bulk, so you can easily copy and paste those commands to track every Pokémon. 
Also, since legendaries are not always available in the wild, they aren't counted when making the top 30, but still added to the list just in case.

### Rank 1 of the top 30 Pokémon in little league ranking
<!-- top30little-start -->
```
!track little1 690 580 753 710 590 592 751 688 607 318 345 72 422 194 597 406 86 339 810 152 653 170 564 37 546 667 43 540 283
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 778 463 959 334 395 195 593 205 38 222 160 189 980 823 22 230 184 799 162 131 537 197 308 663 148 916 705 364 820 326
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 778 463 823 959 671 640 395 146 205 593 718 38 230 379 477 131 9 687 895 663 365 977 487 979 939 488 346 350 765 119 208 260 160 867 36 181
```
<!-- top30ultra-end -->
