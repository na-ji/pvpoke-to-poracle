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
    809, 334, 778, 845, 959, 823, 222, 671, 195, 38, 980, 828, 752, 206, 593,
    618, 979, 105, 197, 288, 22, 812, 184, 101, 703, 395, 226, 386, 687, 302,
    799, 131
  ],
  "top30Ultra": [
    959, 823, 718, 640, 778, 671, 146, 395, 809, 143, 160, 487, 593, 799, 845,
    911, 131, 477, 38, 812, 977, 895, 379, 205, 488, 663, 9, 36, 89, 386, 867,
    733, 365, 208, 119, 181, 730, 979, 939
  ],
  "top30Master": [
    484, 888, 646, 376, 382, 483, 718, 643, 249, 792, 901, 800, 716, 890, 889,
    250, 802, 647, 644, 383, 809, 791, 445, 645, 730, 717, 812, 671, 381, 1000,
    648, 983, 487, 130, 905, 464, 786
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
!track great1 809 334 778 845 959 823 222 671 195 38 980 828 752 206 593 618 979 105 197 288 22 812 184 101 703 395 226 386 687 302 799 131
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 959 823 718 640 778 671 146 395 809 143 160 487 593 799 845 911 131 477 38 812 977 895 379 205 488 663 9 36 89 386 867 733 365 208 119 181 730 979 939
```
<!-- top30ultra-end -->
