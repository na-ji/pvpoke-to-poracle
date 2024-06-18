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
    379, 703, 227, 979, 226, 411, 108, 630, 184, 260, 160, 980, 207, 395, 308,
    279, 618, 488, 171, 195, 288, 706, 18, 783, 748, 799, 593, 208, 28, 497, 974
  ],
  "top30Ultra": [
    379, 788, 487, 160, 62, 718, 18, 638, 630, 488, 640, 260, 377, 663, 799,
    227, 279, 472, 593, 979, 911, 395, 208, 706, 386, 709, 820, 699, 939, 691,
    365, 618, 73, 658, 560, 962, 671, 794
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 800, 383, 791, 646, 648, 250, 150, 644, 716, 249,
    643, 483, 713, 382, 706, 130, 893, 802, 888, 671, 975, 998, 473, 901, 445,
    717, 260, 635, 640, 794, 381, 809, 784, 145, 979, 376, 787, 788
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
!track great1 379 703 227 979 226 411 108 630 184 260 160 980 207 395 308 279 618 488 171 195 288 706 18 783 748 799 593 208 28 497 974
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 788 487 160 62 718 18 638 630 488 640 260 377 663 799 227 279 472 593 979 911 395 208 706 386 709 820 699 939 691 365 618 73 658 560 962 671 794
```
<!-- top30ultra-end -->
