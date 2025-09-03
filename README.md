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
    823, 703, 395, 702, 411, 468, 618, 980, 131, 346, 222, 877, 660, 593, 205,
    423, 105, 57, 867, 675, 184, 38, 895, 634, 799, 40, 208, 777, 687, 979, 477
  ],
  "top30Ultra": [
    823, 939, 131, 895, 867, 468, 326, 379, 205, 146, 488, 395, 593, 558, 477,
    959, 784, 385, 110, 487, 36, 73, 346, 423, 230, 38, 718, 638, 699, 911, 380,
    150, 618, 31, 160, 85, 57, 663, 9
  ],
  "top30Master": [
    888, 484, 889, 249, 646, 644, 643, 483, 791, 800, 890, 792, 383, 718, 381,
    468, 376, 648, 385, 250, 706, 645, 671, 786, 380, 892, 716, 979, 464, 485,
    730, 802, 149, 809, 243, 787, 130, 1000, 717
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
!track great1 823 703 395 702 411 468 618 980 131 346 222 877 660 593 205 423 105 57 867 675 184 38 895 634 799 40 208 777 687 979 477
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 823 939 131 895 867 468 326 379 205 146 488 395 593 558 477 959 784 385 110 487 36 73 346 423 230 38 718 638 699 911 380 150 618 31 160 85 57 663 9
```
<!-- top30ultra-end -->
