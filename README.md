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
    660, 205, 980, 131, 207, 593, 57, 356, 630, 768, 222, 503, 823, 160, 208,
    423, 618, 477, 703, 702, 346, 877, 162, 105, 777, 675, 411, 687, 867
  ],
  "top30Ultra": [
    939, 131, 823, 205, 146, 477, 326, 73, 487, 768, 57, 208, 959, 895, 379,
    593, 346, 867, 110, 160, 423, 663, 718, 911, 36, 638, 691, 452, 9, 979, 488,
    849, 687, 503, 38, 618
  ],
  "top30Master": [
    889, 888, 484, 791, 800, 646, 792, 892, 645, 718, 383, 979, 648, 250, 376,
    786, 485, 464, 802, 644, 149, 671, 647, 249, 716, 1000, 643, 721, 787, 809,
    487, 936, 911, 768, 130, 649, 887, 483, 150, 717
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
!track great1 660 205 980 131 207 593 57 356 630 768 222 503 823 160 208 423 618 477 703 702 346 877 162 105 777 675 411 687 867
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 939 131 823 205 146 477 326 73 487 768 57 208 959 895 379 593 346 867 110 160 423 663 718 911 36 638 691 452 9 979 488 849 687 503 38 618
```
<!-- top30ultra-end -->
