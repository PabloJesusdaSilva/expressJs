const express = require("express");
const path =  require("path");
const app = express();

// defining engine template
app.set("view engine", "ejs");

// defining static files
// app.use(express.static(path.join(__dirname, "views")));
// Obs: used  if you don't have the engine template

// defining public files
app.use(express.static(path.join(__dirname, "public")));

// MVC - Model View Controler

app.get("/", (req, res) => {
   res.render("index", {
      title: "Digital House - Home"
   });
})

app.get("/posts", (req, res) => {
   res.render("posts", {
      title: "Digitaç House - Posts",
      posts: [
         {
            title: "Novidades no mundom da tecnologia",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem expedita aspernatur sequi consectetur minima facere.",
            stars: 2
         },
         {
            title: "Criando servidor com Node.JS",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem expedita aspernatur sequi consectetur minima facere."
         },
         {
            title: "Novas features do Next.Js 13",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem expedita aspernatur sequi consectetur minima facere.",
            stars: 5
         }
      ]
   })
})

// 404 error (page nout found)
app.use((req, res) => {
   res.send("404 Page not found");
})

// running the server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server is listening an port 8080"));