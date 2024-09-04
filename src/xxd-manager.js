import { extract_tokens } from './utils.js';

export function xxd_manager(command) {
    let tokens = extract_tokens(command, "xxd");
    let reverse = false;
    let plain = false;
    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];
        if (current.type === "Argument") {
            if (current.value === "-r") {
                reverse = true;
            } else if (current.value === "-p") {
                plain = true;
            }
        } else if (current.type === "CONTENT") {
            let content = current.value.trim();
            if (reverse) {
                if (plain) {
                    content = content.replace(/\s+/g, '');
                    return Buffer.from(content, 'hex').toString('utf8');
                } else {
                    content = content.replace(/\s+/g, '');
                    return Buffer.from(content, 'hex').toString('utf8');
                }
            } else {
                let hexString = Buffer.from(content, 'utf8').toString('hex');
                if (plain) {
                    return hexString;
                } else {
                    return hexString.match(/.{1,2}/g).join(' ');
                }
            }
        }
    }
}