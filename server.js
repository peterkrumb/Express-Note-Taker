const express = require('express');
const app = express();
const path = require("path");

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start our server
app.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});