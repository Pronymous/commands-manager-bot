import crypto from 'crypto';
export function echo_manager(command) {
    const [echoPart, pipeCommand] = command.split('|').map(part => part.trim());

    const contentMatch = echoPart.match(/['"](.*?)['"]/);
    if (!contentMatch) {
        throw new Error('No string found.');
    }

    const content = contentMatch[1];

    if (!pipeCommand) {
        return content;
    }

    const result = handle_pipe(content, pipeCommand);
    return result;
}

function handle_pipe(content, pipeCommand) {
    const [cmd, ...options] = pipeCommand.split(' ').map(part => part.trim());

    if (cmd === 'base64') {
        if (options.includes('-d')) {
            return Buffer.from(content, 'base64').toString('utf8');
        } else {
            return Buffer.from(content).toString('base64');
        }
    } else if (cmd === 'xxd') {
        if (options.includes('-r') && options.includes('-p')) {
            const hexString = content.replace(/\s+/g, ''); // Supprimer les espaces
            return Buffer.from(hexString, 'hex').toString('utf8');
        } else if (options.includes('-r')) {
            const hexString = content.replace(/\s+/g, ''); // Supprimer les espaces
            return Buffer.from(hexString, 'hex').toString('utf8');
        } else if (options.includes('-p')) {
            return Buffer.from(content).toString('hex');
        } else {
            return Buffer.from(content).toString('hex').match(/.{1,2}/g).join(' ');
        }
    } else if (cmd === "md5sum") {
        return crypto.createHash('md5').update(content).digest('hex');
    }
    else {
        throw new Error(`Unknow command: ${pipeCommand}`);
    }
}