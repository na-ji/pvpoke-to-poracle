# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 164, 308, 279, 709, 260, 411, 108, 334, 832, 171, 302, 472,
    18, 197, 630, 226, 799, 38, 68, 784, 202, 288, 460, 593, 660, 340, 377, 748,
    452
  ],
  "top30Ultra": [
    379, 18, 488, 377, 638, 208, 487, 709, 640, 260, 799, 472, 699, 6, 794, 788,
    593, 832, 560, 618, 460, 365, 630, 38, 378, 145, 646, 149, 154, 862, 186,
    663, 279, 226, 671, 144, 197, 146, 386, 463, 9, 563, 820, 73
  ],
  "top30Master": [
    383, 249, 487, 791, 646, 648, 149, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 809, 473, 484, 893, 250, 483, 382, 649, 143, 645, 260, 376, 635, 794,
    445, 901, 889, 381, 145, 146, 151, 468, 713, 640, 1000, 530, 784, 639, 638
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
!track great1 379 618 560 164 308 279 709 260 411 108 334 832 171 302 472 18 197 630 226 799 38 68 784 202 288 460 593 660 340 377 748 452
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 488 377 638 208 487 709 640 260 799 472 699 6 794 788 593 832 560 618 460 365 630 38 378 145 646 149 154 862 186 663 279 226 671 144 197 146 386 463 9 563 820 73
```
<!-- top30ultra-end -->
