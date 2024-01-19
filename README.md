# PvPoke.com to Poracle
A simple repo that convert the [rankings of PvPoke.com](https://pvpoke.com/rankings/) to [Poracle](https://github.com/KartulUdus/PoracleJS) commands or Pokémon aliases. 
All of those commands/aliases are updated automatically on the CI.

## Pokemon aliases
Add those aliases to the file `config/pokemonAlias.json`. 

<!-- aliases-start -->
```json
{
  "top30Great": [
    108, 488, 379, 703, 227, 260, 171, 979, 226, 308, 184, 411, 630, 288, 618,
    980, 799, 207, 279, 340, 748, 593, 737, 497, 634, 62, 195, 560, 386, 820,
    302, 832
  ],
  "top30Ultra": [
    379, 487, 62, 488, 718, 18, 630, 640, 788, 638, 377, 260, 663, 227, 820,
    171, 279, 799, 472, 979, 593, 911, 73, 6, 386, 646, 563, 939, 768, 794, 832,
    709, 365, 460, 699, 671, 237, 618, 3
  ],
  "top30Master": [
    718, 487, 149, 383, 791, 250, 716, 646, 648, 644, 671, 643, 150, 888, 484,
    713, 998, 249, 473, 893, 717, 382, 130, 483, 635, 809, 645, 794, 445, 901,
    485, 979, 649, 784, 376, 889, 640, 260, 381, 145, 768, 384, 639, 464, 534
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
!track great1 108 488 379 703 227 260 171 979 226 308 184 411 630 288 618 980 799 207 279 340 748 593 737 497 634 62 195 560 386 820 302 832
```
<!-- top30great-end -->

### Rank 1 of the top 30 Pokémon in ultra league ranking
<!-- top30ultra-start -->
```
!track ultra1 379 487 62 488 718 18 630 640 788 638 377 260 663 227 820 171 279 799 472 979 593 911 73 6 386 646 563 939 768 794 832 709 365 460 699 671 237 618 3
```
<!-- top30ultra-end -->
