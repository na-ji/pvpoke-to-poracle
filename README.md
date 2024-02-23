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
    108, 488, 379, 703, 260, 227, 171, 226, 411, 630, 799, 979, 618, 184, 207,
    308, 288, 340, 279, 497, 980, 634, 195, 784, 593, 560, 62, 997, 748, 709,
    754
  ],
  "top30Ultra": [
    379, 487, 62, 488, 18, 718, 630, 788, 640, 638, 377, 260, 663, 279, 227,
    820, 171, 593, 979, 472, 799, 911, 73, 6, 386, 563, 646, 768, 939, 832, 709,
    365, 794, 671, 237, 699, 618, 460, 560
  ],
  "top30Master": [
    484, 718, 645, 149, 487, 383, 791, 648, 250, 646, 716, 150, 644, 643, 483,
    249, 713, 382, 893, 671, 888, 473, 998, 130, 901, 445, 260, 717, 635, 640,
    376, 794, 784, 809, 145, 381, 979, 649, 706, 889, 647, 384, 485
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
!track great1 108 488 379 703 260 227 171 226 411 630 799 979 618 184 207 308 288 340 279 497 980 634 195 784 593 560 62 997 748 709 754
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 488 18 718 630 788 640 638 377 260 663 279 227 820 171 593 979 472 799 911 73 6 386 563 646 768 939 832 709 365 794 671 237 699 618 460 560
```
<!-- top30ultra-end -->
