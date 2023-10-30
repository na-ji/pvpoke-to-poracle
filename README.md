# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    308, 703, 108, 207, 379, 260, 208, 980, 630, 279, 832, 302, 560, 226, 618,
    488, 497, 340, 288, 820, 754, 799, 38, 472, 195, 237, 593, 660, 386, 202,
    184, 766, 446
  ],
  "top30Ultra": [
    379, 208, 488, 638, 377, 718, 487, 820, 640, 832, 630, 788, 768, 260, 699,
    18, 799, 62, 365, 593, 472, 646, 237, 560, 279, 186, 794, 695, 658, 618, 36,
    386, 6, 378, 903, 563, 460, 862, 671, 784, 110, 9
  ],
  "top30Master": [
    718, 487, 383, 149, 716, 646, 648, 384, 644, 888, 150, 643, 671, 791, 484,
    998, 249, 612, 483, 473, 717, 645, 893, 901, 130, 635, 382, 809, 250, 794,
    445, 649, 464, 889, 376, 640, 381, 784, 145, 260, 639, 768, 638, 485
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
!track great1 308 703 108 207 379 260 208 980 630 279 832 302 560 226 618 488 497 340 288 820 754 799 38 472 195 237 593 660 386 202 184 766 446
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 208 488 638 377 718 487 820 640 832 630 788 768 260 699 18 799 62 365 593 472 646 237 560 279 186 794 695 658 618 36 386 6 378 903 563 460 862 671 784 110 9
```
<!-- top30ultra-end -->
