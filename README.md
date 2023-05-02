# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 279, 164, 709, 260, 411, 108, 832, 334, 171, 302, 472,
    18, 197, 630, 226, 799, 68, 38, 202, 593, 784, 288, 340, 660, 460, 377, 699,
    386, 748
  ],
  "top30Ultra": [
    379, 488, 18, 377, 638, 208, 487, 709, 260, 640, 472, 799, 699, 6, 794, 788,
    832, 593, 560, 618, 365, 630, 460, 38, 378, 646, 145, 149, 186, 663, 154,
    862, 279, 226, 671, 386, 144, 146, 197, 9, 563, 463, 110, 820
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 149, 648, 150, 888, 384, 717, 130, 644, 671, 716,
    643, 809, 473, 484, 893, 250, 483, 382, 649, 143, 645, 376, 260, 635, 794,
    445, 901, 889, 381, 146, 145, 151, 468, 1000, 713, 640, 784, 530, 639, 638
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
!track great1 379 618 560 308 279 164 709 260 411 108 832 334 171 302 472 18 197 630 226 799 68 38 202 593 784 288 340 660 460 377 699 386 748
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 488 18 377 638 208 487 709 260 640 472 799 699 6 794 788 832 593 560 618 365 630 460 38 378 646 145 149 186 663 154 862 279 226 671 386 144 146 197 9 563 463 110 820
```
<!-- top30ultra-end -->
