module.exports = (app, path) =>{
    app.get('/api/friends', (req, res) => {
     res.json(friends)
})

app.post('/api/friends', (req, res) => {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase();
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend)
})};