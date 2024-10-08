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
    980, 630, 160, 423, 660, 703, 687, 675, 748, 184, 206, 411, 36, 699, 189,
    463, 195, 799, 28, 379, 68, 105, 208, 211, 503, 452, 365, 658, 997, 706, 783
  ],
  "top30Ultra": [
    36, 423, 718, 487, 160, 699, 638, 110, 477, 379, 687, 208, 463, 671, 675,
    377, 426, 146, 663, 452, 73, 640, 31, 488, 260, 799, 630, 911, 691, 435,
    365, 450, 784, 241, 68, 788, 706, 867, 28
  ],
  "top30Master": [
    718, 484, 717, 791, 250, 800, 464, 671, 646, 645, 487, 716, 149, 146, 802,
    648, 643, 905, 901, 786, 644, 383, 483, 150, 635, 713, 888, 130, 893, 998,
    706, 485, 160, 473, 887, 1000, 445, 649, 376, 249, 382, 787, 468
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
!track great1 980 630 160 423 660 703 687 675 748 184 206 411 36 699 189 463 195 799 28 379 68 105 208 211 503 452 365 658 997 706 783
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 36 423 718 487 160 699 638 110 477 379 687 208 463 671 675 377 426 146 663 452 73 640 31 488 260 799 630 911 691 435 365 450 784 241 68 788 706 867 28
```
<!-- top30ultra-end -->
