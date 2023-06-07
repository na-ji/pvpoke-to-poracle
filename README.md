# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 260, 279, 108, 411, 195, 171, 340, 164, 832, 68, 302,
    202, 365, 18, 334, 288, 488, 197, 593, 28, 472, 226, 386, 377, 784, 799,
    184, 630, 38, 87
  ],
  "top30Ultra": [
    379, 488, 638, 18, 377, 260, 487, 640, 208, 365, 472, 699, 788, 799, 6, 794,
    593, 560, 618, 832, 768, 154, 36, 145, 386, 646, 378, 460, 630, 149, 38,
    709, 186, 279, 28, 663, 671, 226, 862, 563, 9, 649, 68
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 149, 648, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 809, 473, 484, 893, 250, 483, 382, 901, 143, 649, 645, 612, 376, 260,
    635, 794, 445, 381, 889, 146, 145, 151, 468, 713, 1000, 640, 784, 639, 530
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
!track great1 379 618 560 308 260 279 108 411 195 171 340 164 832 68 302 202 365 18 334 288 488 197 593 28 472 226 386 377 784 799 184 630 38 87
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 488 638 18 377 260 487 640 208 365 472 699 788 799 6 794 593 560 618 832 768 154 36 145 386 646 378 460 630 149 38 709 186 279 28 663 671 226 862 563 9 649 68
```
<!-- top30ultra-end -->
