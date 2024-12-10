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
    980, 222, 630, 660, 57, 423, 160, 206, 675, 208, 703, 184, 28, 877, 618,
    411, 36, 748, 687, 189, 463, 699, 799, 777, 195, 105, 379, 497, 979, 68, 87
  ],
  "top30Ultra": [
    57, 423, 718, 36, 487, 160, 208, 379, 638, 452, 377, 110, 488, 671, 687,
    699, 463, 146, 640, 472, 979, 477, 73, 630, 260, 675, 28, 618, 911, 691, 31,
    788, 663, 799, 426, 980, 450, 241, 784
  ],
  "top30Master": [
    718, 484, 717, 800, 464, 791, 250, 645, 646, 487, 802, 383, 671, 716, 893,
    149, 901, 889, 648, 146, 644, 150, 643, 483, 786, 130, 888, 160, 905, 635,
    706, 713, 473, 979, 887, 445, 787, 382, 998, 145, 485, 1000
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
!track great1 980 222 630 660 57 423 160 206 675 208 703 184 28 877 618 411 36 748 687 189 463 699 799 777 195 105 379 497 979 68 87
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 57 423 718 36 487 160 208 379 638 452 377 110 488 671 687 699 463 146 640 472 979 477 73 630 260 675 28 618 911 691 31 788 663 799 426 980 450 241 784
```
<!-- top30ultra-end -->
