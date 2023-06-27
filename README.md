# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    703, 379, 618, 260, 308, 560, 279, 108, 195, 68, 832, 164, 302, 340, 171,
    365, 288, 334, 18, 28, 411, 472, 593, 386, 784, 377, 488, 197, 38, 799, 226,
    202, 660, 754
  ],
  "top30Ultra": [
    379, 488, 638, 377, 18, 487, 260, 640, 208, 365, 472, 699, 788, 799, 794,
    593, 6, 832, 560, 618, 768, 154, 36, 386, 646, 145, 378, 460, 630, 709, 149,
    279, 186, 38, 28, 671, 663, 563, 862, 9, 226, 503
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 149, 648, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 809, 473, 484, 893, 483, 250, 382, 901, 143, 649, 645, 612, 376, 260,
    794, 445, 635, 381, 889, 146, 145, 151, 468, 377, 1000, 485, 640, 713, 784
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
!track great1 703 379 618 260 308 560 279 108 195 68 832 164 302 340 171 365 288 334 18 28 411 472 593 386 784 377 488 197 38 799 226 202 660 754
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 488 638 377 18 487 260 640 208 365 472 699 788 799 794 593 6 832 560 618 768 154 36 386 646 145 378 460 630 709 149 279 186 38 28 671 663 563 862 9 226 503
```
<!-- top30ultra-end -->
