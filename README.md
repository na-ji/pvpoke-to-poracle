# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    379, 618, 411, 279, 260, 164, 709, 18, 560, 334, 226, 308, 108, 472, 38,
    340, 699, 68, 799, 171, 630, 460, 784, 227, 184, 660, 377, 197, 365
  ],
  "top30Ultra": [
    379, 18, 638, 487, 472, 709, 260, 377, 208, 488, 799, 640, 862, 6, 794, 560,
    699, 788, 618, 365, 378, 832, 460, 144, 630, 663, 149, 279, 241
  ],
  "top30Master": [
    149, 249, 487, 791, 648, 888, 150, 383, 717, 644, 716, 671, 130, 473, 643,
    250, 484, 483, 893, 645, 649, 809, 143, 260, 376, 901, 382, 445, 794
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
!track 379 great1
!track 618 great1
!track 411 great1
!track 279 great1
!track 260 great1
!track 164 great1
!track 709 great1
!track 18 great1
!track 560 great1
!track 334 great1
!track 226 great1
!track 308 great1
!track 108 great1
!track 472 great1
!track 38 great1
!track 340 great1
!track 699 great1
!track 68 great1
!track 799 great1
!track 171 great1
!track 630 great1
!track 460 great1
!track 784 great1
!track 227 great1
!track 184 great1
!track 660 great1
!track 377 great1
!track 197 great1
!track 365 great1
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track 379 ultra1
!track 18 ultra1
!track 638 ultra1
!track 487 ultra1
!track 472 ultra1
!track 709 ultra1
!track 260 ultra1
!track 377 ultra1
!track 208 ultra1
!track 488 ultra1
!track 799 ultra1
!track 640 ultra1
!track 862 ultra1
!track 6 ultra1
!track 794 ultra1
!track 560 ultra1
!track 699 ultra1
!track 788 ultra1
!track 618 ultra1
!track 365 ultra1
!track 378 ultra1
!track 832 ultra1
!track 460 ultra1
!track 144 ultra1
!track 630 ultra1
!track 663 ultra1
!track 149 ultra1
!track 279 ultra1
!track 241 ultra1
```
<!-- top30ultra-end -->
