'use strict';
module.exports = (robot) => {
  robot.hear(/hello/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`(´・ω・｀)Hello, <@${user_id}>`);
  });
};