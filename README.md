# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    308, 703, 108, 673, 379, 207, 260, 208, 618, 302, 560, 832, 488, 279, 630,
    226, 340, 497, 288, 820, 754, 799, 195, 38, 237, 472, 593, 766, 386, 202,
    660, 62, 446
  ],
  "top30Ultra": [
    379, 208, 638, 488, 377, 718, 487, 640, 820, 788, 699, 832, 630, 260, 62,
    18, 768, 365, 673, 799, 593, 472, 237, 646, 794, 560, 658, 279, 695, 618, 6,
    186, 903, 386, 36, 649, 784, 378, 9, 671, 862, 460, 503
  ],
  "top30Master": [
    718, 487, 383, 149, 716, 644, 646, 648, 384, 643, 791, 150, 888, 671, 484,
    483, 998, 612, 249, 473, 717, 901, 635, 645, 809, 893, 382, 130, 445, 250,
    794, 649, 464, 376, 889, 381, 784, 640, 639, 145, 638, 485, 151, 713, 768
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
!track great1 308 703 108 673 379 207 260 208 618 302 560 832 488 279 630 226 340 497 288 820 754 799 195 38 237 472 593 766 386 202 660 62 446
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 208 638 488 377 718 487 640 820 788 699 832 630 260 62 18 768 365 673 799 593 472 237 646 794 560 658 279 695 618 6 186 903 386 36 649 784 378 9 671 862 460 503
```
<!-- top30ultra-end -->
