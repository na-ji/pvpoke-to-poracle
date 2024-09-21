# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    213, 436, 509, 630, 263, 340, 452, 660, 451, 624, 425, 197, 560, 67, 195,
    686, 675, 68, 339, 38, 416, 629, 163, 448, 202, 194, 783, 66, 110
  ],
  "top30Great": [
    980, 630, 160, 423, 660, 703, 687, 675, 184, 748, 411, 206, 36, 699, 463,
    189, 799, 379, 28, 195, 68, 208, 105, 503, 365, 211, 452, 997, 658, 706, 783
  ],
  "top30Ultra": [
    36, 718, 423, 160, 487, 699, 638, 110, 477, 379, 208, 675, 463, 687, 377,
    426, 671, 146, 663, 452, 73, 640, 31, 488, 799, 260, 691, 911, 630, 435,
    365, 241, 450, 784, 68, 706, 788, 28, 867
  ],
  "top30Master": [
    718, 484, 717, 791, 800, 250, 464, 671, 646, 645, 487, 802, 716, 146, 149,
    648, 901, 643, 905, 786, 483, 150, 644, 383, 635, 713, 888, 893, 130, 998,
    706, 485, 160, 473, 887, 1000, 445, 649, 376, 249, 382, 787, 468, 975
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
!track little1 213 436 509 630 263 340 452 660 451 624 425 197 560 67 195 686 675 68 339 38 416 629 163 448 202 194 783 66 110
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 980 630 160 423 660 703 687 675 184 748 411 206 36 699 463 189 799 379 28 195 68 208 105 503 365 211 452 997 658 706 783
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 36 718 423 160 487 699 638 110 477 379 208 675 463 687 377 426 671 146 663 452 73 640 31 488 799 260 691 911 630 435 365 241 450 784 68 706 788 28 867
```
<!-- top30ultra-end -->
