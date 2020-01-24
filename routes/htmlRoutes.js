var path = require("path")

module.exports = function(test) {
    test.get("/", function(req, res) {
        // res.send("working")
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    test.get("/notes", function(req, res) {
        // res.send("working")
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
}