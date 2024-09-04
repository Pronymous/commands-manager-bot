import { extract_tokens } from './utils.js';
import crypto from 'crypto';

export function md5sum_manager(command) {
    let tokens = extract_tokens(command, "md5");

    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];

        if (current.type === "CONTENT") {
            return crypto.createHash('md5').update(current.value).digest('hex');
        }
    }
}