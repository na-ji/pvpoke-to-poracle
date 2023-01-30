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
    832, 302, 784, 799, 226, 340, 38, 288, 377, 660, 630, 197, 202, 699, 386,
    460, 149, 777
  ],
  "top30Ultra": [
    379, 638, 18, 487, 709, 472, 377, 260, 488, 208, 640, 799, 6, 794, 862, 699,
    788, 618, 560, 365, 378, 38, 460, 144, 832, 630, 663, 646, 149, 279, 241,
    186, 197, 784, 386, 9, 463, 226, 589, 131, 145, 154, 164
  ],
  "top30Master": [
    149, 249, 487, 646, 791, 648, 383, 150, 888, 644, 717, 716, 643, 671, 484,
    483, 473, 130, 250, 893, 645, 809, 445, 260, 376, 143, 649, 635, 901, 382,
    794, 381, 889, 145, 784, 151, 146, 639, 640, 713, 638, 377, 530
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
!track great1 379 618 308 260 560 411 709 279 164 334 472 108 171 18 68 832 302 784 799 226 340 38 288 377 660 630 197 202 699 386 460 149 777
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 638 18 487 709 472 377 260 488 208 640 799 6 794 862 699 788 618 560 365 378 38 460 144 832 630 663 646 149 279 241 186 197 784 386 9 463 226 589 131 145 154 164
```
<!-- top30ultra-end -->
