const express = require("express");
const app = express();

const renderLayout = require("./layout/layout");
const aboutModule = require("./modules/about-us/routes");
const providerModule = require("./modules/provider-search/routes");

aboutModule(app, renderLayout);
providerModule(app, renderLayout);

app.get("/", (req, res) => {
    const content = `
        <h1>Landing Page</h1>
        <p>Welcome to Dev1-General</p>`;
        
    res.send(renderLayout(content));
});


app.listen(3000, () => {
    console.log("Main app running on 3000");
});