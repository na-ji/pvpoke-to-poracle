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
    222, 980, 630, 660, 823, 160, 423, 57, 877, 206, 675, 208, 618, 184, 703,
    28, 687, 189, 748, 36, 463, 411, 777, 195, 699, 799, 105, 426, 927, 365
  ],
  "top30Ultra": [
    823, 57, 208, 718, 423, 379, 160, 487, 36, 638, 452, 377, 488, 146, 477,
    110, 463, 687, 699, 671, 979, 472, 618, 663, 630, 73, 911, 260, 640, 28,
    426, 788, 939, 691, 799, 31, 365, 241, 9
  ],
  "top30Master": [
    718, 484, 717, 800, 464, 791, 645, 646, 250, 802, 487, 383, 149, 893, 671,
    716, 901, 889, 146, 648, 644, 150, 483, 643, 786, 130, 888, 160, 905, 635,
    706, 713, 473, 445, 979, 887, 787, 382, 998, 145, 1000, 485
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
!track great1 222 980 630 660 823 160 423 57 877 206 675 208 618 184 703 28 687 189 748 36 463 411 777 195 699 799 105 426 927 365
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 823 57 208 718 423 379 160 487 36 638 452 377 488 146 477 110 463 687 699 671 979 472 618 663 630 73 911 260 640 28 426 788 939 691 799 31 365 241 9
```
<!-- top30ultra-end -->
