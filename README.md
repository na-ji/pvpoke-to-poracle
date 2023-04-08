# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 164, 279, 308, 709, 260, 411, 108, 334, 832, 171, 302, 472,
    18, 197, 630, 226, 38, 799, 68, 202, 784, 288, 593, 460, 660, 340, 377, 748,
    699
  ],
  "top30Ultra": [
    379, 18, 488, 377, 638, 208, 487, 709, 260, 640, 472, 799, 699, 6, 794, 788,
    832, 593, 560, 618, 365, 460, 630, 38, 378, 646, 145, 186, 154, 663, 149,
    862, 671, 279, 226, 144, 146, 197, 386, 463, 9, 563, 110, 820
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 648, 149, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 809, 473, 250, 484, 893, 382, 483, 649, 143, 645, 376, 260, 794, 635,
    901, 445, 146, 889, 145, 381, 151, 468, 713, 640, 784, 639, 1000, 530
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
!track great1 379 618 560 164 279 308 709 260 411 108 334 832 171 302 472 18 197 630 226 38 799 68 202 784 288 593 460 660 340 377 748 699
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 488 377 638 208 487 709 260 640 472 799 699 6 794 788 832 593 560 618 365 460 630 38 378 646 145 186 154 663 149 862 671 279 226 144 146 197 386 463 9 563 110 820
```
<!-- top30ultra-end -->
