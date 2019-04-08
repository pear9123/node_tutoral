const crypto = require('crypto');

const cipher = crypto.createCipher('ase-256-cbc', 'aabbcc');
let result = cipher.update('qwer1234', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:',result);

const decipher = crypto.createDecipher('aes-256-cbc', 'aabbcc');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:',result2);