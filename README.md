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
    980, 630, 160, 423, 660, 703, 184, 687, 675, 748, 206, 411, 36, 699, 189,
    463, 799, 195, 28, 379, 105, 68, 208, 211, 503, 365, 452, 658, 997, 706, 783
  ],
  "top30Ultra": [
    36, 423, 487, 718, 160, 638, 699, 110, 477, 379, 208, 687, 463, 675, 671,
    377, 426, 146, 663, 452, 73, 640, 31, 488, 260, 799, 630, 911, 691, 435,
    365, 450, 784, 241, 68, 788, 706, 867, 28
  ],
  "top30Master": [
    718, 484, 717, 800, 645, 464, 791, 250, 646, 671, 487, 802, 716, 149, 893,
    383, 901, 146, 648, 905, 644, 483, 786, 130, 643, 150, 888, 160, 998, 635,
    713, 706, 473, 787, 887, 445, 382, 1000, 485, 376, 730, 249, 768, 649, 260
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
!track great1 980 630 160 423 660 703 184 687 675 748 206 411 36 699 189 463 799 195 28 379 105 68 208 211 503 365 452 658 997 706 783
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 36 423 487 718 160 638 699 110 477 379 208 687 463 675 671 377 426 146 663 452 73 640 31 488 260 799 630 911 691 435 365 450 784 241 68 788 706 867 28
```
<!-- top30ultra-end -->
