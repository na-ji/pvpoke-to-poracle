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
    959, 222, 823, 845, 195, 334, 809, 395, 226, 38, 143, 671, 828, 778, 160,
    593, 752, 162, 184, 980, 22, 288, 386, 105, 979, 687, 101, 131, 197, 977,
    799, 630
  ],
  "top30Ultra": [
    959, 823, 809, 640, 718, 395, 778, 143, 671, 146, 160, 593, 487, 845, 799,
    911, 812, 131, 477, 38, 977, 379, 9, 205, 895, 488, 89, 36, 663, 365, 386,
    867, 208, 119, 260, 733, 730, 181, 939
  ],
  "top30Master": [
    484, 888, 718, 376, 646, 716, 382, 483, 643, 901, 890, 249, 792, 889, 800,
    802, 644, 250, 383, 809, 647, 445, 812, 717, 671, 645, 791, 648, 730, 1000,
    381, 487, 706, 130, 468, 786, 905
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
!track great1 959 222 823 845 195 334 809 395 226 38 143 671 828 778 160 593 752 162 184 980 22 288 386 105 979 687 101 131 197 977 799 630
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 959 823 809 640 718 395 778 143 671 146 160 593 487 845 799 911 812 131 477 38 977 379 9 205 895 488 89 36 663 365 386 867 208 119 260 733 730 181 939
```
<!-- top30ultra-end -->
