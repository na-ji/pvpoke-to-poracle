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
    593, 334, 162, 184, 395, 40, 823, 463, 160, 205, 222, 671, 468, 131, 364,
    663, 979, 36, 687, 356, 302, 980, 618, 9, 308, 799, 346, 765, 317, 737
  ],
  "top30Ultra": [
    146, 823, 131, 593, 671, 395, 36, 895, 160, 977, 640, 468, 463, 718, 272,
    765, 452, 38, 230, 365, 205, 487, 687, 477, 9, 776, 110, 939, 488, 979, 630,
    503, 208, 959, 733
  ],
  "top30Master": [
    888, 484, 376, 716, 889, 646, 483, 643, 792, 644, 802, 382, 249, 890, 800,
    717, 250, 383, 445, 648, 1000, 791, 381, 671, 385, 647, 718, 150, 730, 786,
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
!track great1 593 334 162 184 395 40 823 463 160 205 222 671 468 131 364 663 979 36 687 356 302 980 618 9 308 799 346 765 317 737
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 146 823 131 593 671 395 36 895 160 977 640 468 463 718 272 765 452 38 230 365 205 487 687 477 9 776 110 939 488 979 630 503 208 959 733
```
<!-- top30ultra-end -->
