import { nmap_manager } from './src/nmap-manager.js';

let example1 = "nmap -T5 -p 25,28,30 10.10.10.10 -sC -sV";
let example2 = "nmap -T0 -p 25-30 10.10.10.10 -sC";
let example3 = "nmap -T3 -p 25 website.com -sV";

function commandIdentifier(string) {
    let splitted = string.split(" ")
    if (splitted.length === 0) {
        return "";
    }
    return splitted[0]
}

function run(command) {
    let commandName = commandIdentifier(command);
    if (commandName === "nmap") {
        let result = nmap_manager(command);
        console.log(result);
    }
}

run(example1)
run(example2)
run(example3)