//Description:
//Who Me?
//
//Dependencies:
//None
//
//Configuration:
//None
//
//Commands:
//Hubot You're really bugging me
//
//Author:
//Ritchie Soricelli
//
//Contributor:
//None

module.exports = function (robot) {
    return robot.respond(/You're really bugging me/i, function (msg) {
        //Han Solo "Who? Me?" gif is returned
        msg.send('http://i.imgur.com/IKB69pa.gif');
    });
};
