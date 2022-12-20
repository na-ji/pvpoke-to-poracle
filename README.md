# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 308, 260, 560, 411, 709, 279, 164, 334, 472, 108, 171, 18, 68,
    832, 799, 784, 226, 302, 630, 38, 288, 377, 340, 197, 660, 202, 699, 149,
    460, 386, 748
  ],
  "top30Ultra": [
    379, 18, 638, 472, 487, 709, 260, 377, 488, 208, 640, 799, 6, 862, 794, 699,
    560, 618, 788, 365, 378, 460, 832, 144, 630, 663, 646, 149, 279, 241, 186,
    197, 784, 386, 463, 145, 9, 154, 164, 589, 226, 131, 146, 649, 227
  ],
  "top30Master": [
    249, 149, 487, 646, 791, 648, 888, 150, 383, 717, 644, 716, 671, 130, 643,
    250, 473, 484, 483, 893, 645, 649, 809, 143, 260, 376, 794, 445, 382, 901,
    635, 146, 889, 381, 145, 468, 151, 784, 640, 713, 377, 639, 638
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
!track great1 379 618 308 260 560 411 709 279 164 334 472 108 171 18 68 832 799 784 226 302 630 38 288 377 340 197 660 202 699 149 460 386 748
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 638 472 487 709 260 377 488 208 640 799 6 862 794 699 560 618 788 365 378 460 832 144 630 663 646 149 279 241 186 197 784 386 463 145 9 154 164 589 226 131 146 649 227
```
<!-- top30ultra-end -->
