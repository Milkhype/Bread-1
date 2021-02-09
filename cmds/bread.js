const replies = [':bread::french_bread:', ':D', "Here's some bread because you're awesome", 'Idk what to put here ahhhh'];

module.exports = function(msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};