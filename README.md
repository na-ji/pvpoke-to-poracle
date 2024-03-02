# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Little": [
    436, 360, 86, 263, 629, 580, 207, 108, 633, 194, 37, 624, 133, 320, 104,
    971, 447, 616, 174, 698, 425, 339, 996, 661, 152, 147, 915, 564, 95
  ],
  "top30Great": [
    488, 379, 108, 703, 227, 260, 171, 226, 630, 411, 979, 184, 160, 799, 618,
    207, 706, 308, 279, 340, 497, 288, 980, 195, 395, 634, 783, 593, 748, 673,
    62
  ],
  "top30Ultra": [
    379, 487, 62, 160, 718, 488, 18, 630, 640, 638, 788, 260, 227, 663, 377,
    799, 472, 171, 979, 279, 593, 73, 911, 386, 706, 820, 6, 395, 939, 709, 794,
    671, 365, 691, 237, 3, 460, 699
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 791, 383, 646, 648, 250, 644, 150, 716, 483, 713,
    643, 249, 382, 893, 130, 671, 888, 998, 473, 901, 445, 640, 635, 717, 809,
    794, 376, 784, 381, 145, 979, 706, 649, 647, 485, 384, 889
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
!track little1 436 360 86 263 629 580 207 108 633 194 37 624 133 320 104 971 447 616 174 698 425 339 996 661 152 147 915 564 95
```
<!-- top30little-end -->

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 488 379 108 703 227 260 171 226 630 411 979 184 160 799 618 207 706 308 279 340 497 288 980 195 395 634 783 593 748 673 62
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 160 718 488 18 630 640 638 788 260 227 663 377 799 472 171 979 279 593 73 911 386 706 820 6 395 939 709 794 671 365 691 237 3 460 699
```
<!-- top30ultra-end -->
