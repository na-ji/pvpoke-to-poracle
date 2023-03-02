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
    832, 68, 630, 226, 340, 197, 660, 799, 377, 288, 38, 202, 784, 593, 386,
    699, 488, 460, 149
  ],
  "top30Ultra": [
    379, 18, 487, 472, 488, 709, 260, 638, 377, 208, 799, 6, 640, 593, 699, 794,
    618, 788, 365, 560, 378, 832, 38, 460, 630, 646, 663, 186, 149, 279, 144, 9,
    146, 241, 197, 463, 862, 226, 784, 145, 154, 589, 386, 131
  ],
  "top30Master": [
    249, 383, 487, 791, 646, 149, 648, 150, 888, 130, 384, 717, 671, 644, 716,
    643, 809, 473, 250, 893, 484, 382, 483, 143, 649, 645, 260, 376, 794, 635,
    901, 445, 146, 889, 145, 381, 151, 468, 713, 640, 639, 530, 1000, 784
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
!track great1 379 618 560 308 260 709 411 279 164 334 472 108 171 18 302 832 68 630 226 340 197 660 799 377 288 38 202 784 593 386 699 488 460 149
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 18 487 472 488 709 260 638 377 208 799 6 640 593 699 794 618 788 365 560 378 832 38 460 630 646 663 186 149 279 144 9 146 241 197 463 862 226 784 145 154 589 386 131
```
<!-- top30ultra-end -->
