const crypto = require('crypto');

console.log('base64: ',crypto.createHash('sha512').update('qwer1234').digest('base64'));
console.log('hex: ',crypto.createHash('sha512').update('qwer1234').digest('hex'));