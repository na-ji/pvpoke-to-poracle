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
    379, 979, 703, 488, 108, 227, 171, 260, 630, 184, 411, 160, 226, 799, 980,
    308, 618, 207, 706, 497, 340, 279, 195, 288, 783, 673, 748, 395, 634, 593,
    784
  ],
  "top30Ultra": [
    379, 487, 62, 718, 160, 488, 18, 630, 640, 638, 788, 260, 227, 799, 377,
    663, 171, 472, 279, 979, 593, 73, 386, 911, 706, 820, 395, 939, 6, 365, 709,
    794, 691, 560, 460, 699, 671, 618
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 383, 791, 646, 648, 250, 150, 716, 644, 249, 483,
    713, 382, 643, 706, 130, 893, 671, 888, 998, 473, 901, 445, 260, 717, 640,
    635, 794, 784, 809, 145, 381, 376, 787, 979, 649, 889, 647, 384
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
!track great1 379 979 703 488 108 227 171 260 630 184 411 160 226 799 980 308 618 207 706 497 340 279 195 288 783 673 748 395 634 593 784
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 718 160 488 18 630 640 638 788 260 227 799 377 663 171 472 279 979 593 73 386 911 706 820 395 939 6 365 709 794 691 560 460 699 671 618
```
<!-- top30ultra-end -->
