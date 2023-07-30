# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    703, 379, 618, 260, 279, 62, 308, 560, 108, 302, 195, 832, 365, 340, 68,
    411, 171, 164, 334, 488, 377, 18, 288, 386, 472, 593, 28, 784, 38, 202, 184,
    754, 154
  ],
  "top30Ultra": [
    379, 718, 488, 638, 377, 18, 260, 487, 640, 365, 472, 208, 788, 699, 593,
    62, 6, 799, 794, 832, 618, 560, 768, 154, 36, 378, 460, 646, 145, 38, 186,
    709, 386, 149, 671, 279, 28, 663, 9, 563, 862, 503, 784
  ],
  "top30Master": [
    718, 383, 487, 249, 646, 149, 648, 150, 888, 791, 384, 130, 671, 717, 644,
    716, 643, 473, 484, 893, 483, 250, 809, 382, 649, 901, 143, 645, 376, 260,
    612, 794, 635, 445, 889, 381, 146, 145, 151, 377, 713, 1000, 640, 784
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
!track great1 703 379 618 260 279 62 308 560 108 302 195 832 365 340 68 411 171 164 334 488 377 18 288 386 472 593 28 784 38 202 184 754 154
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 718 488 638 377 18 260 487 640 365 472 208 788 699 593 62 6 799 794 832 618 560 768 154 36 378 460 646 145 38 186 709 386 149 671 279 28 663 9 563 862 503 784
```
<!-- top30ultra-end -->
