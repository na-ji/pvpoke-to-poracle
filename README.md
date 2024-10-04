# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    213, 183, 658, 452, 451, 263, 980, 686, 690, 624, 509, 211, 622, 194, 904,
    590, 355, 30, 633, 867, 36, 630, 562, 703, 623, 687, 634, 691, 29
  ],
  "top30Great": [
    980, 630, 160, 423, 660, 703, 675, 687, 206, 748, 184, 411, 36, 699, 463,
    189, 28, 379, 799, 195, 208, 68, 105, 211, 503, 365, 452, 658, 997, 706, 783
  ],
  "top30Ultra": [
    36, 718, 423, 160, 487, 699, 638, 110, 477, 379, 208, 377, 463, 675, 671,
    687, 426, 146, 663, 452, 73, 31, 640, 260, 488, 799, 911, 691, 630, 435,
    365, 784, 241, 450, 68, 788, 706, 28, 623
  ],
  "top30Master": [
    718, 484, 717, 791, 800, 250, 464, 646, 671, 645, 487, 146, 149, 802, 716,
    648, 643, 901, 905, 786, 150, 644, 483, 383, 635, 713, 893, 888, 130, 998,
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
!track little1 213 183 658 452 451 263 980 686 690 624 509 211 622 194 904 590 355 30 633 867 36 630 562 703 623 687 634 691 29
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 980 630 160 423 660 703 675 687 206 748 184 411 36 699 463 189 28 379 799 195 208 68 105 211 503 365 452 658 997 706 783
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 36 718 423 160 487 699 638 110 477 379 208 377 463 675 671 687 426 146 663 452 73 31 640 260 488 799 911 691 630 435 365 784 241 450 68 788 706 28 623
```
<!-- top30ultra-end -->
