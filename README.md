# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    703, 379, 618, 260, 279, 62, 308, 560, 108, 302, 832, 195, 365, 340, 68,
    411, 171, 164, 334, 488, 377, 288, 18, 472, 386, 593, 28, 784, 38, 202, 184,
    754, 154
  ],
  "top30Ultra": [
    379, 718, 488, 638, 377, 18, 260, 487, 365, 640, 472, 208, 788, 699, 593,
    62, 6, 799, 832, 794, 618, 768, 560, 154, 36, 646, 460, 378, 145, 38, 279,
    186, 709, 386, 149, 671, 28, 9, 663, 563, 503, 862, 68
  ],
  "top30Master": [
    718, 383, 487, 716, 149, 150, 646, 648, 249, 671, 644, 384, 888, 643, 130,
    717, 791, 473, 893, 484, 645, 483, 612, 250, 901, 809, 143, 649, 382, 635,
    260, 794, 445, 376, 889, 381, 145, 146, 640, 713, 151, 784, 377, 639
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
!track great1 703 379 618 260 279 62 308 560 108 302 832 195 365 340 68 411 171 164 334 488 377 288 18 472 386 593 28 784 38 202 184 754 154
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 718 488 638 377 18 260 487 365 640 472 208 788 699 593 62 6 799 832 794 618 768 560 154 36 646 460 378 145 38 279 186 709 386 149 671 28 9 663 563 503 862 68
```
<!-- top30ultra-end -->
