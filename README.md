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
    979, 379, 488, 703, 108, 227, 260, 171, 630, 184, 411, 160, 226, 799, 980,
    308, 618, 207, 497, 706, 340, 279, 195, 288, 783, 673, 748, 634, 395, 593,
    784
  ],
  "top30Ultra": [
    379, 788, 487, 62, 160, 718, 18, 488, 640, 630, 638, 260, 171, 227, 663,
    279, 377, 799, 593, 472, 979, 73, 911, 386, 395, 820, 6, 706, 939, 691, 709,
    365, 699, 794, 560, 497, 618, 671
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 800, 383, 646, 791, 648, 250, 150, 644, 716, 643,
    483, 382, 713, 893, 130, 706, 249, 802, 888, 671, 998, 901, 473, 445, 717,
    260, 635, 640, 794, 979, 784, 809, 381, 145, 787, 376, 788
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
!track great1 979 379 488 703 108 227 260 171 630 184 411 160 226 799 980 308 618 207 497 706 340 279 195 288 783 673 748 634 395 593 784
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 788 487 62 160 718 18 488 640 630 638 260 171 227 663 279 377 799 593 472 979 73 911 386 395 820 6 706 939 691 709 365 699 794 560 497 618 671
```
<!-- top30ultra-end -->
