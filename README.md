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
    379, 979, 488, 703, 108, 227, 260, 171, 630, 184, 411, 160, 226, 980, 799,
    308, 618, 207, 497, 340, 706, 279, 195, 288, 783, 673, 748, 634, 395, 593,
    784
  ],
  "top30Ultra": [
    379, 788, 487, 62, 160, 718, 18, 488, 640, 630, 638, 260, 171, 663, 227,
    279, 377, 799, 593, 979, 472, 73, 386, 911, 395, 820, 6, 706, 939, 794, 691,
    709, 365, 699, 560, 497, 3, 460
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 383, 791, 648, 646, 250, 150, 716, 644, 249, 483,
    643, 713, 382, 706, 893, 130, 888, 671, 473, 998, 901, 445, 717, 260, 635,
    640, 784, 794, 381, 809, 145, 376, 979, 787, 788, 649, 384, 889, 647
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
!track great1 379 979 488 703 108 227 260 171 630 184 411 160 226 980 799 308 618 207 497 340 706 279 195 288 783 673 748 634 395 593 784
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 788 487 62 160 718 18 488 640 630 638 260 171 663 227 279 377 799 593 979 472 73 386 911 395 820 6 706 939 794 691 709 365 699 560 497 3 460
```
<!-- top30ultra-end -->
