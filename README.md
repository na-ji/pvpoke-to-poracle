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
    463, 160, 334, 222, 593, 195, 959, 205, 395, 184, 230, 823, 681, 226, 308,
    38, 189, 119, 799, 687, 618, 663, 980, 705, 131, 356, 364, 820, 326, 279
  ],
  "top30Ultra": [
    959, 463, 718, 593, 823, 671, 640, 395, 146, 230, 9, 205, 687, 979, 346, 38,
    36, 160, 765, 379, 131, 477, 119, 776, 977, 487, 350, 895, 260, 663, 365,
    939, 488, 768, 468, 130
  ],
  "top30Master": [
    888, 484, 376, 646, 792, 716, 643, 483, 889, 382, 644, 802, 890, 249, 800,
    717, 445, 250, 718, 648, 381, 383, 671, 1000, 791, 809, 647, 385, 150, 468,
    730, 786, 380, 706, 700, 645, 130, 979
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
!track great1 463 160 334 222 593 195 959 205 395 184 230 823 681 226 308 38 189 119 799 687 618 663 980 705 131 356 364 820 326 279
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 959 463 718 593 823 671 640 395 146 230 9 205 687 979 346 38 36 160 765 379 131 477 119 776 977 487 350 895 260 663 365 939 488 768 468 130
```
<!-- top30ultra-end -->
