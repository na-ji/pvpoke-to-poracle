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
    222, 346, 423, 184, 356, 618, 105, 411, 334, 823, 477, 752, 706, 207, 939,
    108, 949, 634, 979, 395, 895, 40, 980, 702, 148, 131, 205, 162, 768, 593
  ],
  "top30Ultra": [
    939, 146, 823, 131, 671, 395, 640, 423, 468, 160, 593, 718, 205, 895, 9,
    638, 558, 230, 784, 646, 488, 477, 150, 765, 768, 799, 687, 959, 36, 776,
    487, 208, 346, 867, 73, 706, 452, 503, 385, 212
  ],
  "top30Master": [
    888, 484, 889, 483, 646, 644, 643, 249, 376, 890, 800, 792, 250, 383, 648,
    671, 468, 385, 791, 381, 382, 718, 786, 730, 380, 645, 716, 979, 706, 892,
    130, 464, 1000, 647, 149, 802, 809, 150, 717, 445
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
!track great1 222 346 423 184 356 618 105 411 334 823 477 752 706 207 939 108 949 634 979 395 895 40 980 702 148 131 205 162 768 593
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 939 146 823 131 671 395 640 423 468 160 593 718 205 895 9 638 558 230 784 646 488 477 150 765 768 799 687 959 36 776 487 208 346 867 73 706 452 503 385 212
```
<!-- top30ultra-end -->
