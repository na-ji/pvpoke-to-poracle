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
    980, 222, 630, 660, 57, 423, 160, 206, 675, 703, 184, 28, 877, 411, 36, 618,
    687, 748, 208, 189, 463, 799, 699, 195, 777, 105, 379, 497, 979, 68, 706
  ],
  "top30Ultra": [
    423, 36, 57, 718, 487, 160, 379, 638, 110, 452, 208, 377, 671, 488, 463,
    699, 687, 640, 146, 979, 472, 477, 630, 73, 260, 28, 675, 788, 618, 799, 31,
    663, 426, 911, 691, 241, 980, 450, 784
  ],
  "top30Master": [
    718, 484, 717, 800, 464, 791, 250, 645, 646, 487, 802, 383, 671, 716, 149,
    893, 901, 648, 146, 644, 483, 150, 643, 786, 130, 888, 160, 905, 635, 706,
    713, 473, 979, 887, 445, 787, 382, 145, 998, 485, 1000, 376
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
!track great1 980 222 630 660 57 423 160 206 675 703 184 28 877 411 36 618 687 748 208 189 463 799 699 195 777 105 379 497 979 68 706
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 423 36 57 718 487 160 379 638 110 452 208 377 671 488 463 699 687 640 146 979 472 477 630 73 260 28 675 788 618 799 31 663 426 911 691 241 980 450 784
```
<!-- top30ultra-end -->
