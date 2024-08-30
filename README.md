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
    379, 703, 979, 227, 226, 411, 108, 630, 184, 260, 160, 980, 207, 395, 308,
    279, 488, 618, 171, 799, 195, 288, 706, 18, 748, 783, 593, 208, 497, 28, 737
  ],
  "top30Ultra": [
    379, 487, 788, 160, 62, 718, 18, 638, 488, 630, 640, 260, 377, 799, 663,
    227, 472, 279, 593, 979, 395, 911, 208, 386, 706, 709, 820, 939, 691, 699,
    365, 73, 618, 658, 560, 962, 794, 671
  ],
  "top30Master": [
    484, 718, 716, 149, 383, 645, 648, 791, 800, 483, 646, 487, 671, 644, 713,
    250, 643, 249, 150, 787, 888, 802, 706, 130, 998, 975, 893, 445, 979, 901,
    382, 381, 730, 788, 260, 635, 145, 640, 473, 468, 794, 784, 649, 647, 376
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
!track great1 379 703 979 227 226 411 108 630 184 260 160 980 207 395 308 279 488 618 171 799 195 288 706 18 748 783 593 208 497 28 737
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 788 160 62 718 18 638 488 630 640 260 377 799 663 227 472 279 593 979 395 911 208 386 706 709 820 939 691 699 365 73 618 658 560 962 794 671
```
<!-- top30ultra-end -->
