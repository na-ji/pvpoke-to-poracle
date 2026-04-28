# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    690, 580, 753, 710, 590, 592, 751, 688, 607, 318, 345, 72, 422, 194, 597,
    406, 86, 339, 810, 152, 653, 170, 564, 37, 546, 667, 43, 540, 283
  ],
  "top30Great": [
    195, 959, 823, 593, 395, 205, 334, 184, 40, 160, 308, 222, 463, 663, 131,
    687, 364, 980, 356, 618, 36, 979, 9, 671, 346, 820, 681, 737, 302
  ],
  "top30Ultra": [
    593, 131, 823, 959, 395, 146, 977, 160, 671, 895, 640, 463, 272, 36, 765, 9,
    687, 718, 365, 38, 477, 452, 776, 230, 939, 487, 979, 488, 205, 208, 468,
    346, 867, 799, 503, 768
  ],
  "top30Master": [
    888, 484, 376, 716, 646, 889, 483, 792, 643, 644, 802, 382, 249, 890, 800,
    717, 250, 445, 383, 648, 1000, 381, 791, 671, 385, 647, 718, 150, 730, 786,
    468, 380, 706, 645, 979, 130, 892
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
!track little1 690 580 753 710 590 592 751 688 607 318 345 72 422 194 597 406 86 339 810 152 653 170 564 37 546 667 43 540 283
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 195 959 823 593 395 205 334 184 40 160 308 222 463 663 131 687 364 980 356 618 36 979 9 671 346 820 681 737 302
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 593 131 823 959 395 146 977 160 671 895 640 463 272 36 765 9 687 718 365 38 477 452 776 230 939 487 979 488 205 208 468 346 867 799 503 768
```
<!-- top30ultra-end -->
