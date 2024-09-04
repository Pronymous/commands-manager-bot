export function nmap_manager(command) {
    let result = {
        "ip_domain": "",
        "ports": [],
        "speedScan": "",
        "runScanVersion": false,
        "runDefaultScripts": false,
    };
    
    let tokens = [];
    let current = {
        "type": "WHITESPACE",
        "value": ""
    };
    
    let list_chars = command.split("");
    
    for (let i = 4; i < list_chars.length; i++) {
        let char = list_chars[i];
        
        if ((char >= '0' && char <= '9') && current.type === "WHITESPACE") {
            current.type = "Number";
            current.value += char;
        } 
        else if (char === "." && current.type === "Number") {
            current.type = "IP";
            current.value += char;
        }  
        else if (char === "-") {
            if (current.type === "WHITESPACE") {
                current.type = "Argument";
            } else if (current.type === "Number") {
                current.type = "RangeNumber";
            }
            current.value += char;
        }
        else if (char === ",") {
            if (current.type === "Number") {
                current.type = "ListNumber";
            } else if (current.type === "IDENTIFIANT") {
                current.type = "ListIdentifiant";
            }
            current.value += char;
        }
        else if (char === " ") {
            tokens.push(current);
            current = { type: "WHITESPACE", value: "" };
        } 
        else {
            if (current.type === "WHITESPACE") {
                current.type = "IDENTIFIANT";
            }
            current.value += char; 
        }
    }

    if (current.value) {
        tokens.push(current);
    }
    
    tokens = tokens.filter(token => token.type !== "WHITESPACE");

    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];
        
        if (current.type === "Argument" && current.value.startsWith("-T")) {
            result.speedScan = parseInt(current.value.replace("-T", ""));
        } else if (current.type === "Argument" && current.value === "-p" && i+1 < tokens.length) {
            let next = tokens[i+1];
            if (next.type === "Number") {
                result.ports.push(parseInt(next.value, 10));
            } else if (next.type === "RangeNumber") {
                let portsSplitted = next.value.split("-");
                let from = parseInt(portsSplitted[0], 10);
                let to = parseInt(portsSplitted[1], 10);
                for (let x = from; x <= to; x++) {
                    result.ports.push(x);
                }
            } else if (next.type === "ListNumber") {
                let ports = next.value.split(",");
                ports.forEach(port => {
                    result.ports.push(parseInt(port, 10));
                });
            }
        } else if (current.type === "Argument" && current.value === "-p-") {
            result.ports = "all";
        } else if (current.type === "Argument" && current.value === "-sV") {
            result.runScanVersion = true;
        } else if (current.type === "Argument" && current.value === "-sC") {
            result.runDefaultScripts = true;
        } else if (current.type === "IP" || current.type === "IDENTIFIANT") {
            result["ip_domain"] = current.value;
        }
    }

    return result;
}
