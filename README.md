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
    980, 222, 630, 57, 660, 160, 423, 206, 675, 703, 877, 184, 748, 36, 189,
    687, 28, 208, 618, 411, 699, 463, 195, 799, 777, 105, 927, 497, 365, 979
  ],
  "top30Ultra": [
    423, 57, 718, 36, 487, 160, 208, 379, 638, 452, 110, 377, 671, 699, 488,
    687, 463, 146, 472, 640, 477, 979, 73, 260, 630, 675, 618, 28, 31, 788, 911,
    691, 663, 426, 980, 799, 450, 784, 241
  ],
  "top30Master": [
    718, 484, 717, 800, 464, 791, 645, 250, 646, 802, 487, 383, 149, 893, 716,
    671, 901, 889, 146, 648, 644, 150, 643, 483, 786, 130, 888, 160, 905, 635,
    706, 713, 473, 887, 445, 979, 787, 382, 998, 1000, 145, 485, 376
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
!track great1 980 222 630 57 660 160 423 206 675 703 877 184 748 36 189 687 28 208 618 411 699 463 195 799 777 105 927 497 365 979
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 423 57 718 36 487 160 208 379 638 452 110 377 671 699 488 687 463 146 472 640 477 979 73 260 630 675 618 28 31 788 911 691 663 426 980 799 450 784 241
```
<!-- top30ultra-end -->
