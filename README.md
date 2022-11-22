# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    618, 379, 709, 260, 411, 308, 334, 108, 560, 660, 340, 832, 799, 68, 227,
    460, 365, 31, 867, 784, 171, 377, 748, 630, 351, 478, 302, 184, 488
  ],
  "top30Ultra": [
    379, 638, 487, 709, 260, 208, 488, 377, 640, 31, 794, 618, 799, 862, 365,
    560, 788, 663, 378, 149, 144, 460, 832, 630, 241, 186, 472, 649, 9
  ],
  "top30Master": [
    249, 149, 487, 791, 648, 150, 717, 383, 888, 644, 716, 671, 643, 130, 250,
    483, 484, 893, 645, 649, 809, 143, 468, 901, 376, 260, 445, 473, 794
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

### Rank 1 of the top 30 Pokémon in great league ranking
<!-- top30great-start -->
```
!track 618 great1
!track 379 great1
!track 709 great1
!track 260 great1
!track 411 great1
!track 308 great1
!track 334 great1
!track 108 great1
!track 560 great1
!track 660 great1
!track 340 great1
!track 832 great1
!track 799 great1
!track 68 great1
!track 227 great1
!track 460 great1
!track 365 great1
!track 31 great1
!track 867 great1
!track 784 great1
!track 171 great1
!track 377 great1
!track 748 great1
!track 630 great1
!track 351 great1
!track 478 great1
!track 302 great1
!track 184 great1
!track 488 great1
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track 379 ultra1
!track 638 ultra1
!track 487 ultra1
!track 709 ultra1
!track 260 ultra1
!track 208 ultra1
!track 488 ultra1
!track 377 ultra1
!track 640 ultra1
!track 31 ultra1
!track 794 ultra1
!track 618 ultra1
!track 799 ultra1
!track 862 ultra1
!track 365 ultra1
!track 560 ultra1
!track 788 ultra1
!track 663 ultra1
!track 378 ultra1
!track 149 ultra1
!track 144 ultra1
!track 460 ultra1
!track 832 ultra1
!track 630 ultra1
!track 241 ultra1
!track 186 ultra1
!track 472 ultra1
!track 649 ultra1
!track 9 ultra1
```
<!-- top30ultra-end -->
