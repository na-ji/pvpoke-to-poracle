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
    593, 162, 423, 334, 184, 823, 618, 40, 463, 411, 222, 395, 131, 687, 663,
    364, 346, 680, 356, 799, 302, 36, 980, 326, 918, 28, 768, 9, 477, 503
  ],
  "top30Ultra": [
    146, 823, 131, 593, 395, 671, 36, 895, 423, 640, 205, 463, 468, 160, 272,
    365, 765, 687, 718, 680, 9, 38, 768, 230, 487, 477, 959, 488, 452, 799, 630,
    776, 150, 867, 733, 699, 939
  ],
  "top30Master": [
    888, 484, 376, 716, 889, 646, 483, 643, 792, 644, 249, 890, 717, 800, 250,
    383, 648, 382, 718, 1000, 385, 791, 671, 381, 468, 786, 730, 979, 380, 645,
    706, 892, 647, 130, 150, 464, 149, 248, 802, 445
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
!track great1 593 162 423 334 184 823 618 40 463 411 222 395 131 687 663 364 346 680 356 799 302 36 980 326 918 28 768 9 477 503
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 146 823 131 593 395 671 36 895 423 640 205 463 468 160 272 365 765 687 718 680 9 38 768 230 487 477 959 488 452 799 630 776 150 867 733 699 939
```
<!-- top30ultra-end -->
