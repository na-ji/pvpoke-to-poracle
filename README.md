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
    379, 703, 979, 227, 226, 411, 108, 184, 630, 260, 160, 980, 207, 395, 308,
    279, 488, 618, 171, 195, 799, 288, 706, 748, 783, 18, 593, 208, 497, 28, 737
  ],
  "top30Ultra": [
    379, 487, 788, 160, 62, 718, 18, 638, 488, 630, 640, 260, 377, 799, 663,
    227, 472, 279, 593, 979, 395, 911, 208, 386, 706, 709, 820, 939, 699, 691,
    365, 73, 618, 658, 560, 962, 794, 671
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 800, 383, 791, 648, 646, 250, 150, 716, 644, 483,
    249, 643, 713, 382, 706, 893, 130, 802, 888, 671, 975, 998, 473, 445, 901,
    717, 260, 635, 794, 381, 640, 809, 784, 376, 145, 979, 787, 788
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
!track great1 379 703 979 227 226 411 108 184 630 260 160 980 207 395 308 279 488 618 171 195 799 288 706 748 783 18 593 208 497 28 737
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 788 160 62 718 18 638 488 630 640 260 377 799 663 227 472 279 593 979 395 911 208 386 706 709 820 939 699 691 365 73 618 658 560 962 794 671
```
<!-- top30ultra-end -->
