# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    108, 488, 379, 703, 227, 260, 171, 226, 411, 630, 799, 979, 184, 618, 207,
    308, 288, 340, 279, 497, 980, 634, 195, 593, 784, 560, 709, 62, 748, 997,
    237
  ],
  "top30Ultra": [
    379, 487, 62, 488, 718, 18, 630, 640, 638, 377, 788, 260, 663, 820, 279,
    227, 171, 979, 799, 593, 472, 911, 6, 73, 386, 646, 563, 768, 939, 832, 709,
    365, 699, 794, 237, 460, 671, 560, 618
  ],
  "top30Master": [
    718, 487, 149, 383, 791, 250, 716, 646, 648, 644, 643, 150, 484, 671, 888,
    713, 998, 249, 483, 473, 893, 635, 717, 382, 809, 130, 445, 645, 794, 901,
    979, 485, 376, 784, 649, 889, 381, 640, 145, 384, 639, 768, 638, 464, 534
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
!track great1 108 488 379 703 227 260 171 226 411 630 799 979 184 618 207 308 288 340 279 497 980 634 195 593 784 560 709 62 748 997 237
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 488 718 18 630 640 638 377 788 260 663 820 279 227 171 979 799 593 472 911 6 73 386 646 563 768 939 832 709 365 699 794 237 460 671 560 618
```
<!-- top30ultra-end -->
