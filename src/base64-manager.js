export function base64_manager(command) {
    let list_chars = command.split("");
    
    let tokens = [];
    let current = {
        "type": "WHITESPACE",
        "value": ""
    };
    let inQuotes = false; // Pour suivre si nous sommes à l'intérieur d'une chaîne de caractères entre guillemets
    
    for (let i = 7; i < list_chars.length; i++) {  // Commence après "base64 "
        let char = list_chars[i];
        
        if ((char === "'" || char === '"') && !inQuotes) {
            inQuotes = true;
            current = { type: "CONTENT", value: "" };
        }
        else if ((char === "'" || char === '"') && inQuotes) {
            inQuotes = false;
            tokens.push(current);
            current = { type: "WHITESPACE", value: "" };
        }
        else if (inQuotes) {
            current.value += char;
        }
        else if (char === "-") {
            if (current.type !== "WHITESPACE") {
                tokens.push(current);
            }
            current = { type: "Argument", value: char };
        }
        else if (char === " ") {
            if (current.type !== "WHITESPACE") {
                tokens.push(current);
                current = { type: "WHITESPACE", value: "" };
            }
        }
        else {
            if (current.type === "WHITESPACE") {
                current.type = "IDENTIFIER";
                current.value = char;
            } else {
                current.value += char;
            }
        }
    }

    if (current.value) {
        tokens.push(current);
    }
    
    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];
        
        if (current.type === "Argument" && current.value === "-d" && i + 1 < tokens.length) {
            let string = tokens[i + 1].value;
            return atob(string);
        } else if (current.type === "CONTENT") {
            let string = current.value;
            return btoa(string);
        }
    }
}
