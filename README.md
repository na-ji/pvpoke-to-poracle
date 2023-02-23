# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 260, 709, 411, 164, 279, 334, 108, 472, 171, 18, 302,
    832, 68, 630, 226, 799, 288, 340, 38, 197, 660, 784, 377, 202, 699, 386,
    460, 748, 488, 149
  ],
  "top30Ultra": [
    379, 18, 487, 377, 638, 472, 260, 709, 488, 208, 640, 799, 794, 862, 6, 699,
    788, 618, 560, 365, 38, 378, 460, 832, 630, 646, 663, 149, 279, 197, 241,
    186, 144, 9, 146, 386, 784, 463, 226, 589, 145, 154, 131, 164
  ],
  "top30Master": [
    383, 249, 487, 791, 646, 648, 149, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 473, 484, 893, 250, 483, 809, 382, 143, 649, 645, 260, 376, 794, 901,
    635, 445, 889, 381, 146, 145, 151, 468, 713, 640, 639, 530, 784, 638, 377
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
!track great1 379 618 560 308 260 709 411 164 279 334 108 472 171 18 302 832 68 630 226 799 288 340 38 197 660 784 377 202 699 386 460 748 488 149
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 487 377 638 472 260 709 488 208 640 799 794 862 6 699 788 618 560 365 38 378 460 832 630 646 663 149 279 197 241 186 144 9 146 386 784 463 226 589 145 154 131 164
```
<!-- top30ultra-end -->
