# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 260, 279, 108, 411, 171, 195, 164, 68, 340, 832, 302,
    202, 365, 334, 18, 288, 488, 197, 226, 593, 472, 28, 386, 784, 377, 799,
    184, 630, 38, 87
  ],
  "top30Ultra": [
    379, 488, 638, 377, 18, 487, 260, 640, 208, 365, 472, 699, 788, 799, 794, 6,
    593, 832, 618, 560, 768, 154, 36, 145, 646, 386, 378, 460, 709, 149, 630,
    38, 279, 28, 186, 663, 671, 862, 563, 503, 9, 226
  ],
  "top30Master": [
    249, 383, 487, 646, 791, 149, 648, 150, 888, 130, 384, 717, 671, 644, 716,
    643, 809, 473, 484, 250, 893, 382, 483, 143, 901, 649, 645, 260, 376, 794,
    635, 445, 146, 889, 145, 381, 151, 468, 713, 640, 1000, 784, 639, 530
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
!track great1 379 618 560 308 260 279 108 411 171 195 164 68 340 832 302 202 365 334 18 288 488 197 226 593 472 28 386 784 377 799 184 630 38 87
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 488 638 377 18 487 260 640 208 365 472 699 788 799 794 6 593 832 618 560 768 154 36 145 646 386 378 460 709 149 630 38 279 28 186 663 671 862 563 503 9 226
```
<!-- top30ultra-end -->
