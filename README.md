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
    809, 334, 845, 778, 959, 222, 823, 671, 195, 38, 980, 752, 828, 593, 618,
    288, 105, 197, 979, 22, 226, 143, 184, 101, 395, 812, 703, 386, 160, 131,
    302
  ],
  "top30Ultra": [
    959, 823, 718, 640, 778, 671, 395, 146, 809, 143, 160, 487, 593, 799, 845,
    911, 131, 38, 812, 477, 977, 895, 379, 205, 488, 9, 89, 36, 663, 386, 867,
    365, 733, 208, 730, 119, 181, 979, 939
  ],
  "top30Master": [
    484, 888, 718, 376, 646, 643, 716, 382, 483, 890, 901, 249, 792, 889, 800,
    802, 644, 250, 383, 809, 647, 445, 812, 717, 671, 645, 791, 648, 730, 1000,
    381, 487, 706, 130, 468, 786
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
!track great1 809 334 845 778 959 222 823 671 195 38 980 752 828 593 618 288 105 197 979 22 226 143 184 101 395 812 703 386 160 131 302
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 959 823 718 640 778 671 395 146 809 143 160 487 593 799 845 911 131 38 812 477 977 895 379 205 488 9 89 36 663 386 867 365 733 208 730 119 181 979 939
```
<!-- top30ultra-end -->
