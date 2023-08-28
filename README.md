# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    703, 618, 379, 308, 279, 260, 108, 62, 302, 560, 832, 68, 195, 365, 411,
    171, 334, 488, 164, 288, 340, 472, 386, 784, 202, 28, 593, 377, 184, 38,
    799, 660, 460, 149
  ],
  "top30Ultra": [
    379, 718, 488, 638, 377, 487, 260, 640, 365, 208, 472, 788, 832, 699, 799,
    18, 6, 62, 593, 618, 768, 794, 149, 646, 154, 560, 658, 460, 38, 386, 279,
    186, 68, 28, 709, 378, 145, 36, 784, 862, 9, 563, 671
  ],
  "top30Master": [
    718, 487, 383, 149, 716, 150, 384, 646, 648, 644, 249, 888, 671, 643, 130,
    484, 791, 473, 717, 612, 893, 483, 645, 382, 635, 901, 143, 250, 809, 649,
    260, 794, 381, 376, 445, 889, 145, 784, 640, 146, 639, 485, 151, 713
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
!track great1 703 618 379 308 279 260 108 62 302 560 832 68 195 365 411 171 334 488 164 288 340 472 386 784 202 28 593 377 184 38 799 660 460 149
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 718 488 638 377 487 260 640 365 208 472 788 832 699 799 18 6 62 593 618 768 794 149 646 154 560 658 460 38 386 279 186 68 28 709 378 145 36 784 862 9 563 671
```
<!-- top30ultra-end -->
