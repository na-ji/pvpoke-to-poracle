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
    980, 222, 630, 660, 160, 423, 57, 675, 703, 206, 877, 184, 748, 189, 687,
    28, 36, 208, 618, 699, 411, 463, 195, 799, 777, 105, 927, 365, 497, 979
  ],
  "top30Ultra": [
    423, 57, 718, 36, 487, 160, 208, 379, 638, 452, 110, 377, 488, 671, 687,
    699, 463, 146, 472, 979, 477, 640, 73, 630, 260, 675, 28, 618, 31, 691, 911,
    663, 788, 426, 799, 980, 450, 241, 784
  ],
  "top30Master": [
    718, 484, 717, 800, 464, 791, 250, 645, 646, 487, 802, 383, 671, 716, 893,
    149, 901, 889, 648, 146, 644, 483, 150, 643, 786, 130, 888, 905, 160, 635,
    706, 713, 979, 473, 887, 445, 787, 382, 998, 145, 485
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
!track great1 980 222 630 660 160 423 57 675 703 206 877 184 748 189 687 28 36 208 618 699 411 463 195 799 777 105 927 365 497 979
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 423 57 718 36 487 160 208 379 638 452 110 377 488 671 687 699 463 146 472 979 477 640 73 630 260 675 28 618 31 691 911 663 788 426 799 980 450 241 784
```
<!-- top30ultra-end -->
