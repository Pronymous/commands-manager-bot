# Commands Manager

Manager for commands for the discord bot.

Commands:
- nmap
    - Tools to scan networks and machines.
    - Arguments available: ``T5``, ``T4``, ``T3``, ``T2``, ``T1``, ``T0``, ``<ip adress>``, ``-p <port1>,<port2>,<port3>...``, ``-p <from>-<to>``, ``-sC``, ``-sV``
    - Format: ``nmap <arguments>``
- searchsploit
    - Tools to get a list of possible exploits from a service/protocol/tool/cms/etc...
    - Format: ``searchsploit <name>``
- base64
    - Tools to decode/encode strings into base64
    - Format: ``base64 -d "<string to decode>"`` or ``base64 "<string to encode>"``