export function extract_tokens(command, prefix) {
    let list_chars = command.split("");

    let tokens = [];
    let current = {
        "type": "WHITESPACE",
        "value": ""
    };
    let inQuotes = false;

    for (let i = prefix.length + 1; i < list_chars.length; i++) {
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

    return tokens.filter(token => token.type !== "WHITESPACE");
}
