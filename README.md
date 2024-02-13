# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    108, 488, 379, 703, 227, 260, 171, 226, 411, 979, 799, 630, 618, 184, 207,
    308, 340, 279, 288, 497, 980, 634, 195, 593, 784, 560, 62, 709, 997, 748,
    754
  ],
  "top30Ultra": [
    379, 487, 62, 488, 718, 18, 630, 640, 638, 377, 788, 260, 663, 820, 227,
    171, 279, 799, 472, 593, 979, 911, 6, 386, 73, 646, 563, 832, 768, 939, 365,
    460, 699, 794, 618, 709, 671, 237, 560
  ],
  "top30Master": [
    718, 645, 149, 383, 791, 487, 250, 716, 644, 648, 646, 671, 150, 643, 888,
    484, 713, 998, 249, 473, 893, 382, 717, 483, 130, 635, 809, 794, 445, 901,
    979, 485, 649, 784, 905, 376, 889, 640, 145, 260, 381, 639, 384, 534
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
!track great1 108 488 379 703 227 260 171 226 411 979 799 630 618 184 207 308 340 279 288 497 980 634 195 593 784 560 62 709 997 748 754
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 488 718 18 630 640 638 377 788 260 663 820 227 171 279 799 472 593 979 911 6 386 73 646 563 832 768 939 365 460 699 794 618 709 671 237 560
```
<!-- top30ultra-end -->
