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
    823, 131, 980, 768, 593, 660, 503, 207, 160, 205, 477, 702, 222, 618, 877,
    346, 423, 356, 57, 630, 777, 162, 703, 867, 687, 105, 675, 587, 208
  ],
  "top30Ultra": [
    823, 939, 131, 146, 73, 326, 477, 205, 57, 768, 895, 593, 346, 959, 663,
    379, 867, 160, 36, 208, 718, 487, 110, 423, 638, 452, 911, 691, 9, 979, 503,
    687, 649, 618, 671, 488, 977
  ],
  "top30Master": [
    889, 888, 484, 791, 800, 646, 792, 890, 892, 645, 718, 383, 979, 648, 250,
    376, 786, 464, 485, 802, 644, 149, 671, 249, 647, 716, 1000, 643, 787, 721,
    809, 487, 936, 911, 130, 649, 768, 150, 483, 887, 717
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
!track great1 823 131 980 768 593 660 503 207 160 205 477 702 222 618 877 346 423 356 57 630 777 162 703 867 687 105 675 587 208
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 823 939 131 146 73 326 477 205 57 768 895 593 346 959 663 379 867 160 36 208 718 487 110 423 638 452 911 691 9 979 503 687 649 618 671 488 977
```
<!-- top30ultra-end -->
