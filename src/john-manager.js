export function john_manager(command) {
    let format = "";  // Valeur par défaut
    let wordlist = "";
    let hash = "";
    
    let splitted = command.split(" ");
    for (let i = 1; i < splitted.length; i++) {
        let current = splitted[i];
        
        if (current.startsWith("--format=")) {
            format = current.replaceAll("--format=", "")
        } else if (current.startsWith("--wordlist=")) {
            wordlist = current.replaceAll("--wordlist=", "")
        } 
        else {
            hash = current.replaceAll('"', "");
        }
    } 
    
    return {
        hash: hash,
        format: format,
        wordlist: wordlist,
    };
}