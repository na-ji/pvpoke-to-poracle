# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    235, 183, 213, 436, 202, 979, 360, 194, 630, 133, 207, 263, 86, 195, 83,
    452, 832, 288, 108, 447, 560, 618, 339, 417, 226, 782, 152, 862, 633
  ],
  "top30Great": [
    488, 379, 108, 703, 227, 260, 171, 630, 226, 411, 979, 160, 184, 799, 706,
    308, 618, 207, 340, 279, 195, 288, 497, 980, 634, 395, 783, 593, 748, 560,
    148
  ],
  "top30Ultra": [
    379, 487, 62, 718, 160, 488, 18, 630, 640, 788, 638, 260, 227, 799, 663,
    171, 377, 472, 979, 593, 279, 73, 386, 911, 706, 820, 395, 939, 6, 709, 365,
    794, 560, 699, 691, 3, 460, 671
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 383, 791, 646, 648, 250, 644, 150, 716, 483, 713,
    643, 249, 706, 382, 130, 893, 671, 888, 998, 473, 901, 445, 635, 717, 640,
    809, 784, 794, 381, 376, 145, 979, 647, 649, 384, 889, 485
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
!track little1 235 183 213 436 202 979 360 194 630 133 207 263 86 195 83 452 832 288 108 447 560 618 339 417 226 782 152 862 633
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 488 379 108 703 227 260 171 630 226 411 979 160 184 799 706 308 618 207 340 279 195 288 497 980 634 395 783 593 748 560 148
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 718 160 488 18 630 640 788 638 260 227 799 663 171 377 472 979 593 279 73 386 911 706 820 395 939 6 709 365 794 560 699 691 3 460 671
```
<!-- top30ultra-end -->
