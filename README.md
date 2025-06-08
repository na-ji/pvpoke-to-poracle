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
    980, 205, 660, 131, 593, 222, 503, 356, 207, 160, 768, 630, 823, 423, 618,
    208, 477, 702, 877, 703, 777, 346, 162, 57, 105, 675, 587, 867, 411
  ],
  "top30Ultra": [
    939, 131, 823, 205, 477, 146, 326, 487, 768, 73, 57, 593, 959, 346, 160,
    208, 110, 867, 718, 423, 379, 638, 36, 911, 452, 691, 979, 849, 9, 618, 687,
    488, 630, 503, 38
  ],
  "top30Master": [
    888, 889, 484, 791, 646, 800, 718, 383, 792, 645, 250, 892, 648, 786, 376,
    671, 643, 464, 809, 649, 485, 249, 647, 802, 149, 716, 1000, 787, 644, 979,
    483, 768, 487, 717, 911, 130, 936, 150
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
!track great1 980 205 660 131 593 222 503 356 207 160 768 630 823 423 618 208 477 702 877 703 777 346 162 57 105 675 587 867 411
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 939 131 823 205 477 146 326 487 768 73 57 593 959 346 160 208 110 867 718 423 379 638 36 911 452 691 979 849 9 618 687 488 630 503 38
```
<!-- top30ultra-end -->
