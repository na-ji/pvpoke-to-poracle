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
    980, 57, 630, 423, 660, 160, 703, 184, 748, 411, 206, 675, 687, 36, 189,
    799, 28, 463, 699, 379, 195, 208, 105, 979, 68, 211, 783, 503, 497, 365, 452
  ],
  "top30Ultra": [
    36, 57, 423, 718, 487, 160, 379, 110, 638, 452, 208, 671, 377, 488, 463,
    146, 687, 640, 979, 73, 630, 699, 477, 788, 260, 675, 426, 911, 663, 691,
    31, 799, 241, 618, 980, 784, 450, 28, 365
  ],
  "top30Master": [
    718, 484, 717, 800, 645, 791, 464, 250, 646, 487, 802, 149, 671, 716, 893,
    383, 901, 146, 648, 644, 905, 786, 150, 483, 130, 643, 888, 160, 998, 635,
    706, 713, 473, 979, 887, 445, 787, 382, 1000, 485, 376, 249, 730, 649
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
!track great1 980 57 630 423 660 160 703 184 748 411 206 675 687 36 189 799 28 463 699 379 195 208 105 979 68 211 783 503 497 365 452
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 36 57 423 718 487 160 379 110 638 452 208 671 377 488 463 146 687 640 979 73 630 699 477 788 260 675 426 911 663 691 31 799 241 618 980 784 450 28 365
```
<!-- top30ultra-end -->
