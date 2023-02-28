# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 260, 709, 411, 164, 279, 472, 108, 334, 171, 18, 302,
    832, 68, 630, 226, 340, 660, 197, 288, 799, 377, 202, 784, 38, 699, 386,
    488, 460, 748, 365
  ],
  "top30Ultra": [
    379, 18, 487, 377, 472, 709, 638, 260, 488, 208, 640, 799, 862, 794, 6, 699,
    618, 788, 560, 365, 38, 378, 832, 460, 630, 646, 663, 149, 279, 197, 186,
    241, 144, 9, 146, 463, 784, 386, 589, 226, 145, 131, 154, 164
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 648, 149, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 473, 250, 893, 484, 382, 809, 483, 143, 649, 645, 260, 376, 794, 901,
    635, 445, 146, 889, 145, 381, 151, 468, 713, 640, 639, 530, 1000, 784
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
!track great1 379 618 560 308 260 709 411 164 279 472 108 334 171 18 302 832 68 630 226 340 660 197 288 799 377 202 784 38 699 386 488 460 748 365
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 487 377 472 709 638 260 488 208 640 799 862 794 6 699 618 788 560 365 38 378 832 460 630 646 663 149 279 197 186 241 144 9 146 463 784 386 589 226 145 131 154 164
```
<!-- top30ultra-end -->
