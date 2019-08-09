module.exports = (app, path) =>{
    var friends = require('../data/friends')
    app.get('/api/friends', (req, res) => {
    res.json(friends)
})

app.post('/api/friends', (req, res) => {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
})
};