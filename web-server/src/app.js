const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


/**
 * Goal: Create a partial for the footer
 *
 * 1. Setup the template for the footer partial "Created by Some Name"
 * 2. Render the partial at the bottom of all three pages
 * 3. Test your work by visiting all three pages
 */

const app = express();

// Define paths for express config - Definir parametros para configuracion de express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Receta",
    name: "Rissotto",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "De mi",
    name: "Cesar Casares",
  });
});

app.get("/help/*", (req, res) => {
  res.send("404", {
    title: "404",
    name: "Cesar Casares",
    errorMensaje: "Help article not found.",
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
      return res.send({
          error: 'You must provide an address!'
      })
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
      if (error) {
          return res.send({ error })
      }

      forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
              return res.send({ error })
          }

          res.send({
              forecast: forecastData,
              location,
              address: req.query.address
          })
      })
  })
})

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Cesar Casares",
    errorMensaje: "Oage not found",
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You most provide a serach term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
