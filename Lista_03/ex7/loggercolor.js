const util = require('util');

const inspectOpts = { colors: true };

function info() {
    const debugInfo = util.debuglog('INFO');
    const color = process.env.NODE_DEV === 'INFO' ? 'green' : 'reset';
    
    util.inspect.styles["string"] = color;
    debugInfo('Informação: %s', util.inspect('Mensagem de INFO', inspectOpts));
}

function warning() {
    const debugWarning = util.debuglog('WARNING');
    const color = process.env.NODE_DEV === 'WARNING' ? 'yellow' : 'reset';
    
    util.inspect.styles["string"] = color;
    debugWarning('Aviso: %s', util.inspect('Mensagem de WARNING', inspectOpts));
}

function error() {
    const debugError = util.debuglog('ERROR');
    const color = process.env.NODE_DEV === 'ERROR' ? 'red' : 'reset';
    
    util.inspect.styles["string"] = color;
    debugError('Erro: %s', util.inspect('Mensagem de ERROR', inspectOpts));
}

module.exports = {
    info,
    warning,
    error
};
