# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 260, 279, 108, 411, 195, 171, 340, 68, 164, 302, 832,
    202, 365, 334, 488, 18, 288, 197, 593, 226, 472, 28, 386, 784, 377, 799,
    630, 184, 38, 754
  ],
  "top30Ultra": [
    379, 488, 638, 18, 377, 260, 487, 640, 208, 365, 472, 699, 788, 799, 593,
    794, 6, 560, 832, 618, 768, 154, 36, 386, 378, 145, 460, 646, 630, 709, 149,
    38, 186, 28, 279, 671, 663, 862, 563, 9, 226, 503
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 149, 648, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 809, 473, 484, 893, 483, 250, 382, 901, 649, 143, 645, 612, 376, 260,
    794, 445, 635, 889, 381, 145, 151, 146, 468, 377, 1000, 640, 713, 784, 530
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
!track great1 379 618 560 308 260 279 108 411 195 171 340 68 164 302 832 202 365 334 488 18 288 197 593 226 472 28 386 784 377 799 630 184 38 754
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 488 638 18 377 260 487 640 208 365 472 699 788 799 593 794 6 560 832 618 768 154 36 386 378 145 460 646 630 709 149 38 186 28 279 671 663 862 563 9 226 503
```
<!-- top30ultra-end -->
