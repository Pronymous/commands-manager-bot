import { nmap_manager } from './src/nmap-manager.js';
import { searchsploit_manager } from './src/searchsploit-manager.js';
import { base64_manager } from './src/base64-manager.js';
import { md5sum_manager } from './src/md5sum-manager.js';
import { xxd_manager } from './src/xxd-manager.js';
import { john_manager } from './src/john-manager.js';
import { echo_manager } from './src/echo-manager.js';

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
    } else if (commandName === "john") {
        result = john_manager(command);
        console.log(result);
    } else if (commandName === "echo") {
        result = echo_manager(command);
        console.log(result);
    }
    return result;
}

console.log("\n");
run("nmap -T5 -p 25,28,30 10.10.10.10 -sC -sV");
run("nmap -T0 -p 25-30 10.10.10.10 -sC");
run("nmap -T3 -p 25 website.com -sV");
console.log("\n");

console.log("\n");
run("searchsploit vsftpd 3.0.3");
run("searchsploit Webdav");
run("searchsploit OpenSSH 7.6");
console.log("\n");

console.log("\n");
run("base64 'Hello World'");
run("base64 \"Hello World\"");
run("base64 -d 'SGVsbG8gV29ybGQ='");
console.log("\n");

console.log("\n");
run("md5sum \"Hello World\"");
console.log("\n");

console.log("\n");
run("xxd \"Hello World\"");
run("xxd -p \"Hello World\"");
run("xxd -r \"48 65 6c 6c 6f 20 57 6f 72 6c 64\"");
run("xxd -r -p \"48656c6c6f20576f726c64\"");
console.log("\n");

console.log("\n");
run("john \"098f6bcd4621d373cade4e832627b4f6\"");
run("john --format=SHA256 \"9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08\"");
run("john --format=NT --wordlist=rockyou.txt \"098f6bcd4621d373cade4e832627b4f6\"");
console.log("\n");

console.log("\n");
run("echo 'hello world'");
run("echo \"hello world\"");
run("echo 'hello world' | base64");
run("echo 'aGVsbG8gd29ybGQ=' | base64 -d");
run("echo 'hello world' | xxd");
run("echo '68 65 6c 6c 6f 20 77 6f 72 6c 64' | xxd -r")
run("echo '68656c6c6f20776f726c64' | xxd -r -p")
run("echo 'Hello World' | md5sum");
console.log("\n");