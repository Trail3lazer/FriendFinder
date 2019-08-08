let exp = (app, path) => {
app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})
}

export default exp