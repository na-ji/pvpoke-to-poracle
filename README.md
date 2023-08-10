# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    703, 379, 618, 260, 279, 308, 62, 108, 560, 302, 195, 832, 365, 340, 68,
    334, 411, 171, 164, 488, 377, 288, 386, 472, 18, 593, 28, 202, 784, 184,
    754, 38, 154
  ],
  "top30Ultra": [
    379, 718, 488, 638, 377, 260, 487, 18, 640, 365, 208, 472, 699, 788, 832, 6,
    799, 593, 62, 794, 618, 560, 154, 768, 36, 658, 646, 460, 378, 145, 709, 38,
    149, 671, 186, 28, 386, 279, 563, 663, 9, 862, 68
  ],
  "top30Master": [
    718, 383, 487, 149, 716, 150, 648, 646, 249, 644, 671, 888, 384, 643, 717,
    130, 791, 473, 893, 484, 483, 645, 612, 901, 809, 635, 382, 143, 445, 649,
    260, 250, 794, 376, 889, 381, 145, 640, 713, 151, 485, 784, 146, 377, 530
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
!track great1 703 379 618 260 279 308 62 108 560 302 195 832 365 340 68 334 411 171 164 488 377 288 386 472 18 593 28 202 784 184 754 38 154
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 718 488 638 377 260 487 18 640 365 208 472 699 788 832 6 799 593 62 794 618 560 154 768 36 658 646 460 378 145 709 38 149 671 186 28 386 279 563 663 9 862 68
```
<!-- top30ultra-end -->
