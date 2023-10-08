# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    308, 703, 108, 379, 207, 260, 208, 560, 618, 302, 832, 279, 226, 488, 630,
    340, 497, 288, 820, 754, 799, 237, 38, 195, 766, 472, 593, 386, 202, 660,
    62, 184, 446
  ],
  "top30Ultra": [
    379, 208, 638, 488, 377, 718, 487, 640, 820, 699, 832, 260, 788, 630, 18,
    62, 799, 365, 768, 593, 472, 646, 237, 560, 794, 658, 695, 618, 6, 386, 279,
    186, 903, 36, 649, 784, 671, 378, 862, 460, 9, 709, 503
  ],
  "top30Master": [
    718, 383, 487, 149, 716, 646, 648, 384, 644, 888, 643, 150, 791, 671, 484,
    998, 249, 612, 483, 473, 717, 645, 901, 893, 130, 635, 809, 382, 250, 794,
    649, 445, 464, 376, 889, 640, 381, 784, 145, 639, 260, 485, 638, 768
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
!track great1 308 703 108 379 207 260 208 560 618 302 832 279 226 488 630 340 497 288 820 754 799 237 38 195 766 472 593 386 202 660 62 184 446
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 208 638 488 377 718 487 640 820 699 832 260 788 630 18 62 799 365 768 593 472 646 237 560 794 658 695 618 6 386 279 186 903 36 649 784 671 378 862 460 9 709 503
```
<!-- top30ultra-end -->
