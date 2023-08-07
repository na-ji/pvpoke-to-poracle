# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    703, 379, 618, 260, 279, 308, 62, 560, 108, 302, 832, 195, 365, 340, 68,
    411, 488, 171, 334, 164, 377, 288, 386, 472, 18, 28, 593, 202, 784, 184,
    660, 754, 154
  ],
  "top30Ultra": [
    379, 718, 488, 638, 377, 260, 487, 18, 640, 365, 208, 788, 699, 472, 832,
    593, 6, 62, 799, 794, 560, 618, 768, 154, 36, 646, 378, 460, 145, 38, 279,
    186, 709, 149, 386, 671, 28, 563, 9, 503, 663, 862, 68
  ],
  "top30Master": [
    718, 383, 487, 716, 149, 150, 646, 648, 249, 671, 888, 644, 384, 643, 130,
    717, 791, 473, 893, 484, 483, 645, 612, 901, 250, 809, 143, 382, 649, 260,
    794, 635, 445, 376, 889, 381, 145, 640, 713, 146, 151, 784, 377, 485
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
!track great1 703 379 618 260 279 308 62 560 108 302 832 195 365 340 68 411 488 171 334 164 377 288 386 472 18 28 593 202 784 184 660 754 154
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 718 488 638 377 260 487 18 640 365 208 788 699 472 832 593 6 62 799 794 560 618 768 154 36 646 378 460 145 38 279 186 709 149 386 671 28 563 9 503 663 862 68
```
<!-- top30ultra-end -->
