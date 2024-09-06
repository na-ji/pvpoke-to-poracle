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
    980, 630, 160, 423, 703, 184, 36, 687, 675, 206, 660, 748, 189, 411, 463,
    699, 68, 379, 195, 105, 28, 497, 671, 365, 799, 208, 658, 377, 40, 652, 110
  ],
  "top30Ultra": [
    718, 687, 36, 675, 463, 638, 160, 379, 487, 377, 671, 630, 477, 640, 110,
    208, 699, 799, 452, 423, 426, 663, 68, 146, 706, 784, 241, 488, 435, 691,
    658, 788, 62, 73, 867, 365, 911, 260
  ],
  "top30Master": [
    718, 484, 717, 791, 800, 464, 250, 671, 646, 645, 487, 146, 149, 802, 716,
    648, 643, 786, 905, 901, 150, 644, 483, 383, 635, 713, 893, 888, 130, 998,
    706, 485, 473, 160, 887, 1000, 445, 649, 376, 249, 382, 787, 793, 468
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
!track great1 980 630 160 423 703 184 36 687 675 206 660 748 189 411 463 699 68 379 195 105 28 497 671 365 799 208 658 377 40 652 110
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 718 687 36 675 463 638 160 379 487 377 671 630 477 640 110 208 699 799 452 423 426 663 68 146 706 784 241 488 435 691 658 788 62 73 867 365 911 260
```
<!-- top30ultra-end -->
