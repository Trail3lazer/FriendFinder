module.exports = (app, path) =>{

var friends = require('../data/friends')

app.get('/api/friends', (req, res) => {
    res.json(friends)
})

app.post('/api/friends', (req, res) => {
    var newFriend = req.body;
    let bestFriend = {
        dif: 100
    };
    for (i in friends){
        let dude = friends[i];
        let dudeTotal = 0;
        let friendTotal = 0;
        let dif = 101;
        for (idx in dude.stats){
            dudeTotal += parseInt(dude.stats[idx]);
            friendTotal += parseInt(newFriend.stats[idx]);
        };
        if(dudeTotal === friendTotal && dude !== newFriend){
            bestFriend.dif = 0;
            bestFriend.obj = dude}
        else if (dudeTotal>friendTotal){dif = dudeTotal-friendTotal}
        else {dif = friendTotal-dudeTotal};
        if(dif<bestFriend.dif){
            bestFriend.dif = dif;
            bestFriend.obj = dude};
    };
    bestFriend = bestFriend.obj;
    res.json(bestFriend);
    friends.push(newFriend);
})
};