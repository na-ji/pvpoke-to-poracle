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
    222, 346, 423, 184, 411, 477, 105, 356, 334, 867, 823, 618, 40, 706, 205,
    980, 207, 752, 395, 939, 702, 768, 979, 131, 344, 671, 895, 634, 108, 949
  ],
  "top30Ultra": [
    939, 131, 823, 395, 671, 146, 593, 205, 423, 640, 160, 468, 9, 718, 646,
    488, 558, 477, 768, 895, 36, 776, 638, 346, 150, 784, 73, 959, 867, 487,
    799, 765, 208, 230, 385, 503, 452, 687, 977, 212
  ],
  "top30Master": [
    888, 484, 889, 483, 646, 644, 643, 671, 249, 376, 800, 890, 792, 250, 383,
    648, 468, 385, 791, 381, 382, 645, 786, 718, 730, 380, 716, 979, 706, 892,
    130, 464, 149, 1000, 802, 445, 150, 809, 717, 787
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
!track great1 222 346 423 184 411 477 105 356 334 867 823 618 40 706 205 980 207 752 395 939 702 768 979 131 344 671 895 634 108 949
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 939 131 823 395 671 146 593 205 423 640 160 468 9 718 646 488 558 477 768 895 36 776 638 346 150 784 73 959 867 487 799 765 208 230 385 503 452 687 977 212
```
<!-- top30ultra-end -->
