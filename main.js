import { nmap_manager } from './src/nmap-manager.js';
import { searchsploit_manager } from './src/searchsploit-manager.js';
import { base64_manager } from './src/base64-manager.js';
import { md5sum_manager } from './src/md5sum-manager.js';
import { xxd_manager } from './src/xxd-manager.js';

let example1 = "nmap -T5 -p 25,28,30 10.10.10.10 -sC -sV";
let example2 = "nmap -T0 -p 25-30 10.10.10.10 -sC";
let example3 = "nmap -T3 -p 25 website.com -sV";

let example4 = "searchsploit vsftpd 3.0.3";
let example5 = "searchsploit Webdav";
let example6 = "searchsploit OpenSSH 7.6";

let example7 = "base64 'Hello World'";
let example8 = "base64 \"Hello World\"";
let example9 = "base64 -d 'SGVsbG8gV29ybGQ='";

let example10 = "md5sum \"Hello World\"";

let example11 = "xxd \"Hello World\"";
let example12 = "xxd -r -p \"48656c6c6f20576f726c64\"";

function commandIdentifier(string) {
    let splitted = string.split(" ")
    if (splitted.length === 0) {
        return "";
    }
    return splitted[0]
}

function run(command) {
    let result;
    let commandName = commandIdentifier(command);
    if (commandName === "nmap") {
        result = nmap_manager(command);
        console.log(result);
    } else if (commandName === "searchsploit") {
        result = searchsploit_manager(command);
        console.log(result);
    } else if (commandName === "base64") {
        result = base64_manager(command);
        console.log(result);
    } else if (commandName === "md5sum") {
        result = md5sum_manager(command);
        console.log(result);
    } else if (commandName === "xxd") {
        result = xxd_manager(command);
        console.log(result);
    }
    return result;
}

console.log("\n");
run(example1)
run(example2)
run(example3)
console.log("\n");

console.log("\n");
run(example4)
run(example5)
run(example6)
console.log("\n");

console.log("\n");
run(example7)
run(example8)
run(example9)
console.log("\n");

console.log("\n");
run(example10)
console.log("\n");

console.log("\n");
run(example11)
run(example12)
console.log("\n");