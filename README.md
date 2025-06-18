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
    980, 660, 205, 131, 593, 222, 356, 207, 503, 160, 768, 630, 423, 823, 208,
    618, 477, 702, 703, 877, 777, 346, 105, 57, 162, 675, 587, 867, 411
  ],
  "top30Ultra": [
    939, 131, 823, 205, 477, 146, 326, 768, 487, 73, 57, 593, 959, 346, 160,
    208, 110, 423, 867, 379, 718, 638, 36, 911, 691, 452, 979, 849, 9, 618, 488,
    687, 630, 503, 38
  ],
  "top30Master": [
    888, 889, 484, 791, 646, 800, 383, 718, 645, 792, 250, 892, 648, 786, 376,
    671, 643, 464, 649, 809, 249, 485, 647, 802, 716, 149, 787, 1000, 979, 483,
    644, 768, 487, 717, 911, 130, 150, 887
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
!track great1 980 660 205 131 593 222 356 207 503 160 768 630 423 823 208 618 477 702 703 877 777 346 105 57 162 675 587 867 411
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 939 131 823 205 477 146 326 768 487 73 57 593 959 346 160 208 110 423 867 379 718 638 36 911 691 452 979 849 9 618 488 687 630 503 38
```
<!-- top30ultra-end -->
