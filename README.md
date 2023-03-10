# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 560, 308, 260, 709, 411, 279, 164, 334, 472, 108, 171, 18, 302,
    832, 68, 630, 226, 340, 197, 799, 288, 660, 377, 202, 38, 784, 593, 386,
    699, 488, 460, 149
  ],
  "top30Ultra": [
    379, 18, 487, 472, 709, 488, 377, 638, 260, 208, 6, 799, 640, 618, 699, 593,
    794, 788, 365, 560, 378, 832, 38, 630, 460, 646, 663, 186, 279, 149, 144, 9,
    146, 241, 197, 463, 862, 226, 145, 784, 589, 154, 386, 131
  ],
  "top30Master": [
    383, 249, 487, 791, 646, 149, 648, 150, 888, 384, 130, 717, 671, 644, 716,
    643, 809, 473, 484, 893, 250, 483, 382, 143, 649, 645, 260, 376, 794, 635,
    901, 445, 889, 381, 146, 145, 151, 468, 713, 640, 1000, 530, 784, 639, 638
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
!track great1 379 618 560 308 260 709 411 279 164 334 472 108 171 18 302 832 68 630 226 340 197 799 288 660 377 202 38 784 593 386 699 488 460 149
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 487 472 709 488 377 638 260 208 6 799 640 618 699 593 794 788 365 560 378 832 38 630 460 646 663 186 279 149 144 9 146 241 197 463 862 226 145 784 589 154 386 131
```
<!-- top30ultra-end -->
