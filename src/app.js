const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = process.env.PORT | 3000;

let publicPath = path.join(__dirname, "../public");
let viewsPath = path.join(__dirname, "../views");
let partialsPath = path.join(__dirname, "../views/partials/");

// Link and set up express with our resources
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicPath));

hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    res.render("index", {
        title: "Palette Randomizer",        
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});