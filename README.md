# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    661, 208, 451, 241, 104, 686, 40, 660, 220, 95, 546, 263, 468, 675, 658,
    189, 452, 194, 333, 580, 463, 622, 509, 823, 460, 211, 690, 597, 25
  ],
  "top30Great": [
    222, 980, 630, 660, 823, 160, 423, 57, 877, 206, 675, 208, 184, 618, 703,
    28, 687, 189, 748, 36, 463, 411, 777, 195, 799, 699, 105, 426, 927, 365
  ],
  "top30Ultra": [
    823, 57, 208, 718, 423, 160, 379, 487, 36, 638, 452, 377, 110, 146, 488,
    477, 463, 699, 671, 687, 979, 472, 663, 618, 630, 73, 911, 260, 640, 28,
    788, 426, 691, 939, 799, 31, 38, 241, 867
  ],
  "top30Master": [
    484, 646, 718, 791, 464, 716, 671, 644, 645, 483, 250, 800, 643, 802, 717,
    648, 383, 149, 487, 888, 889, 787, 786, 893, 150, 979, 901, 905, 130, 485,
    706, 249, 713, 887, 445, 1000, 382, 145, 635, 647, 146
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
!track little1 661 208 451 241 104 686 40 660 220 95 546 263 468 675 658 189 452 194 333 580 463 622 509 823 460 211 690 597 25
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 222 980 630 660 823 160 423 57 877 206 675 208 184 618 703 28 687 189 748 36 463 411 777 195 799 699 105 426 927 365
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 823 57 208 718 423 160 379 487 36 638 452 377 110 146 488 477 463 699 671 687 979 472 663 618 630 73 911 260 640 28 788 426 691 939 799 31 38 241 867
```
<!-- top30ultra-end -->
