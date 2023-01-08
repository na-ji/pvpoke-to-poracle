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
    832, 799, 784, 302, 226, 340, 288, 630, 38, 377, 660, 197, 202, 699, 386,
    460, 149, 748
  ],
  "top30Ultra": [
    379, 18, 638, 487, 472, 709, 377, 260, 488, 208, 640, 799, 6, 862, 794, 699,
    618, 560, 788, 365, 378, 460, 832, 630, 144, 663, 646, 149, 279, 241, 186,
    197, 784, 386, 9, 463, 589, 145, 226, 154, 164, 131, 649, 227
  ],
  "top30Master": [
    149, 249, 487, 791, 646, 888, 648, 150, 383, 717, 644, 716, 671, 643, 130,
    473, 250, 484, 483, 893, 645, 649, 809, 143, 260, 376, 382, 901, 794, 445,
    635, 146, 889, 381, 145, 151, 468, 784, 640, 713, 377, 639, 638
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
!track great1 379 618 308 260 560 411 709 279 164 334 472 108 171 18 68 832 799 784 302 226 340 288 630 38 377 660 197 202 699 386 460 149 748
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 638 487 472 709 377 260 488 208 640 799 6 862 794 699 618 560 788 365 378 460 832 630 144 663 646 149 279 241 186 197 784 386 9 463 589 145 226 154 164 131 649 227
```
<!-- top30ultra-end -->
