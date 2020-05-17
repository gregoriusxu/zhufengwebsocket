let SecWebSocketKey = 'yZIB/WHqB3IJVRDApb1Nkg==';
let SecWebSocketAccept = 'oYmc5SZQnZNcJ5aC6mfKMhRUEDo=';
let CODE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
let crypto = require('crypto');

function toAcceptKey(wsKey) {
    //md5 hash 
    return crypto.createHash('sha1')
        .update(wsKey + CODE)
        .digest('base64');
}
let result = toAcceptKey(SecWebSocketKey);
console.log(result);
