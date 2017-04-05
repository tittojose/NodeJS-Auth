const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

var authenticate = function (username, password, callback) {
    if (username === 'titto' && password === 'titto') {
        return callback(null,
            { name: 'titto' }
        );
    } else {
        return callback(null, false);
    }

    return callback({
        message : 'Something is wrong'
    });
};

passport.use(new BasicStrategy(authenticate));

exports.isAuthenticated = passport.authenticate("basic", {session : false});
