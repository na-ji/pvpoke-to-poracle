# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    308, 703, 108, 379, 207, 260, 208, 618, 302, 560, 832, 279, 488, 226, 630,
    340, 497, 288, 820, 754, 799, 195, 38, 237, 766, 593, 386, 472, 202, 660,
    62, 184, 446
  ],
  "top30Ultra": [
    379, 208, 638, 488, 377, 718, 487, 640, 820, 788, 699, 832, 260, 630, 62,
    18, 365, 768, 593, 799, 472, 237, 646, 560, 794, 658, 279, 186, 6, 695, 618,
    903, 386, 36, 649, 9, 784, 378, 671, 862, 503, 460, 73
  ],
  "top30Master": [
    718, 383, 487, 149, 716, 646, 648, 384, 644, 888, 150, 643, 791, 671, 484,
    998, 249, 612, 483, 473, 717, 645, 901, 893, 130, 635, 382, 809, 250, 794,
    445, 649, 464, 376, 889, 640, 381, 784, 145, 260, 639, 638, 485, 768, 151
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
!track great1 308 703 108 379 207 260 208 618 302 560 832 279 488 226 630 340 497 288 820 754 799 195 38 237 766 593 386 472 202 660 62 184 446
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 208 638 488 377 718 487 640 820 788 699 832 260 630 62 18 365 768 593 799 472 237 646 560 794 658 279 186 6 695 618 903 386 36 649 9 784 378 671 862 503 460 73
```
<!-- top30ultra-end -->
