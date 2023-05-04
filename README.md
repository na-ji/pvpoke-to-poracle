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
    593, 832, 560, 618, 630, 365, 460, 38, 378, 646, 145, 186, 149, 154, 862,
    279, 663, 226, 671, 144, 386, 146, 197, 9, 563, 463, 73, 110
  ],
  "top30Master": [
    383, 249, 487, 791, 646, 149, 648, 150, 888, 384, 130, 717, 644, 671, 716,
    643, 809, 473, 484, 893, 250, 483, 382, 649, 143, 645, 376, 260, 635, 794,
    445, 901, 889, 381, 146, 145, 151, 468, 713, 1000, 640, 784, 639, 530, 638
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
!track ultra1 379 488 18 377 638 208 487 709 260 640 472 799 699 6 794 788 593 832 560 618 630 365 460 38 378 646 145 186 149 154 862 279 663 226 671 144 386 146 197 9 563 463 73 110
```
<!-- top30ultra-end -->
