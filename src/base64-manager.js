import { extract_tokens } from './utils.js';
export function base64_manager(command) {
    let tokens = extract_tokens(command, "base64");
    
    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];
        
        if (current.type === "Argument" && current.value === "-d" && i + 1 < tokens.length) {
            return atob(tokens[i + 1].value);
        } else if (current.type === "CONTENT") {
            return btoa(current.value);
        }
    }
}