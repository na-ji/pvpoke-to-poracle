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
    630, 980, 131, 687, 222, 326, 356, 160, 877, 176, 423, 660, 593, 823, 675,
    57, 184, 477, 703, 208, 302, 587, 162, 618, 346, 36, 344, 799, 189, 777
  ],
  "top30Ultra": [
    823, 326, 131, 477, 487, 593, 718, 423, 110, 36, 57, 867, 379, 208, 160,
    205, 146, 687, 452, 911, 630, 638, 768, 488, 346, 9, 671, 962, 618, 979, 73,
    788, 377, 663, 675, 640, 691, 699
  ],
  "top30Master": [
    484, 646, 718, 786, 791, 671, 648, 716, 464, 800, 645, 483, 787, 250, 643,
    383, 644, 802, 717, 888, 487, 149, 647, 889, 893, 905, 130, 979, 901, 1000,
    150, 249, 485, 468, 713, 382, 706, 887, 768, 146, 445
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
!track great1 630 980 131 687 222 326 356 160 877 176 423 660 593 823 675 57 184 477 703 208 302 587 162 618 346 36 344 799 189 777
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 823 326 131 477 487 593 718 423 110 36 57 867 379 208 160 205 146 687 452 911 630 638 768 488 346 9 671 962 618 979 73 788 377 663 675 640 691 699
```
<!-- top30ultra-end -->
