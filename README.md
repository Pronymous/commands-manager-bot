# Commands Manager

Manager for commands for the discord bot.

Commands:
- nmap
    - Tools to scan networks and machines.
    - Format: ``nmap <arguments>`` (give IP/domain after, between or before arguments)
    - Arguments available: ``T5``, ``T4``, ``T3``, ``T2``, ``T1``, ``T0``, ``-p <port1>,<port2>,<port3>...``, ``-p <from>-<to>``, ``-sC``, ``-sV``
- searchsploit
    - Tools to get a list of possible exploits from a service/protocol/tool/cms/etc...
    - Format: ``searchsploit <name>``
- base64
    - Tools to decode/encode strings into base64 (in a real scenario, the string should be in a file)
    - Format: ``base64 -d "<string to decode>"``, ``base64 "<string to encode>"``
- md5sum
    - Tools to encode strings into md5 (in a real scenario, the string should be in a file)
    - Format: ``md5 "<string to encode>"``
- xxd
    - Tools to encode strings into md5 (in a real scenario, the string should be in a file)
    - Format: ``xxd "<string to encode>"``, ``xxd -r -p "<string to decode>"``
    - Arguments available: ``-p``, ``-r``
- john
    - Tools to crack hashs: MD5, SHA256 etc. 