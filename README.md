# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    308, 703, 108, 379, 260, 207, 62, 208, 68, 560, 488, 618, 832, 195, 302,
    279, 340, 226, 497, 288, 820, 630, 237, 472, 593, 766, 754, 202, 386, 660,
    28, 184
  ],
  "top30Ultra": [
    379, 208, 638, 488, 377, 718, 487, 640, 260, 820, 832, 699, 788, 630, 62,
    18, 472, 768, 799, 365, 593, 646, 237, 560, 794, 149, 658, 695, 186, 28,
    618, 68, 38, 279, 460, 6, 903, 386, 36, 649, 145, 9, 784
  ],
  "top30Master": [
    718, 383, 487, 149, 716, 150, 646, 648, 384, 644, 888, 643, 130, 671, 791,
    484, 612, 483, 249, 473, 717, 893, 645, 635, 901, 382, 809, 250, 143, 649,
    794, 445, 381, 376, 889, 640, 145, 784, 260, 639, 464, 638, 485, 151, 768
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
!track great1 308 703 108 379 260 207 62 208 68 560 488 618 832 195 302 279 340 226 497 288 820 630 237 472 593 766 754 202 386 660 28 184
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 208 638 488 377 718 487 640 260 820 832 699 788 630 62 18 472 768 799 365 593 646 237 560 794 149 658 695 186 28 618 68 38 279 460 6 903 386 36 649 145 9 784
```
<!-- top30ultra-end -->
