# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    108, 488, 379, 703, 260, 227, 171, 226, 411, 979, 799, 630, 618, 184, 207,
    308, 340, 279, 288, 497, 980, 195, 634, 593, 784, 709, 62, 560, 997, 748,
    754
  ],
  "top30Ultra": [
    379, 487, 62, 488, 718, 18, 630, 640, 638, 788, 377, 260, 663, 820, 227,
    279, 171, 799, 979, 472, 593, 911, 6, 386, 73, 646, 563, 768, 832, 939, 709,
    794, 365, 460, 699, 237, 671, 560, 618
  ],
  "top30Master": [
    718, 645, 149, 383, 791, 487, 250, 716, 644, 648, 150, 643, 671, 646, 888,
    484, 713, 998, 249, 473, 893, 130, 382, 717, 483, 635, 809, 445, 794, 901,
    979, 485, 649, 784, 889, 376, 640, 381, 260, 145, 384, 639, 534, 464
  ]
}
```
<!-- aliases-end -->

After restarting Poracle, you can easily track those Pokémon like this:
```shell
!track top30Great great1
!track top30Ultra ultra1
```

## Commands
Poracle is able to process track commands in bulk, so you can easily copy and paste those commands to track every Pokémon. 
Also, since legendaries are not always available in the wild, they aren't counted when making the top 30, but still added to the list just in case.

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track great1 108 488 379 703 260 227 171 226 411 979 799 630 618 184 207 308 340 279 288 497 980 195 634 593 784 709 62 560 997 748 754
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 488 718 18 630 640 638 788 377 260 663 820 227 279 171 799 979 472 593 911 6 386 73 646 563 768 832 939 709 794 365 460 699 237 671 560 618
```
<!-- top30ultra-end -->
