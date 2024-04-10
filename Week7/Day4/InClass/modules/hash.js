const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'qwerty';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
    });
});