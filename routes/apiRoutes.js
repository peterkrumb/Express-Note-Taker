const path = require("path");
const fs = require('fs');
const notes = require("../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });



    app.post("/api/notes", function(req, res) {
        let newNote = req.body
        notes.push(newNote);

        fs.writeFile("../db/db.json", JSON.stringify(notes), (results, err) => {
            if (err) console.log(err);
            res.json(results)
        })
    });

}