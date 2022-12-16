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
    832, 302, 784, 799, 226, 340, 288, 630, 38, 377, 660, 202, 197, 699, 386,
    460, 149, 748
  ],
  "top30Ultra": [
    379, 18, 638, 487, 472, 709, 260, 377, 208, 488, 799, 862, 640, 6, 794, 699,
    560, 618, 788, 365, 378, 460, 832, 144, 630, 663, 149, 279, 241, 186, 197,
    784, 145, 386, 463, 164, 9, 226, 589, 154, 146, 131, 227
  ],
  "top30Master": [
    249, 149, 487, 791, 888, 648, 150, 383, 717, 644, 716, 671, 130, 473, 643,
    250, 484, 483, 893, 645, 649, 809, 143, 260, 376, 901, 794, 445, 382, 635,
    146, 889, 145, 381, 151, 468, 784, 640, 713, 639, 377, 638, 530
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
!track great1 379 618 308 260 560 411 709 279 164 334 472 108 171 18 68 832 302 784 799 226 340 288 630 38 377 660 202 197 699 386 460 149 748
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 638 487 472 709 260 377 208 488 799 862 640 6 794 699 560 618 788 365 378 460 832 144 630 663 149 279 241 186 197 784 145 386 463 164 9 226 589 154 146 131 227
```
<!-- top30ultra-end -->
