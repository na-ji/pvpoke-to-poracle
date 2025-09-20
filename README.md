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
    823, 222, 346, 660, 703, 205, 131, 395, 618, 980, 356, 105, 344, 423, 706,
    867, 208, 477, 184, 593, 334, 411, 939, 108, 40, 207, 634, 326, 702
  ],
  "top30Ultra": [
    823, 939, 131, 867, 477, 488, 326, 895, 468, 593, 379, 146, 395, 346, 205,
    73, 487, 150, 9, 671, 558, 718, 385, 160, 230, 765, 110, 452, 618, 784, 119,
    687, 959, 638, 423, 691, 31, 36
  ],
  "top30Master": [
    888, 484, 249, 889, 644, 483, 646, 791, 643, 671, 800, 890, 792, 648, 383,
    468, 385, 381, 786, 718, 376, 645, 730, 250, 380, 716, 979, 706, 892, 130,
    1000, 149, 802, 150, 717, 464, 809, 494
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
!track great1 823 222 346 660 703 205 131 395 618 980 356 105 344 423 706 867 208 477 184 593 334 411 939 108 40 207 634 326 702
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 823 939 131 867 477 488 326 895 468 593 379 146 395 346 205 73 487 150 9 671 558 718 385 160 230 765 110 452 618 784 119 687 959 638 423 691 31 36
```
<!-- top30ultra-end -->
