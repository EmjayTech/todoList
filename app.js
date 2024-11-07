const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);

const app = express();
const items =["Eat Food", "Cook Food", "Buy Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){

const day = date.getDate();


  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){

  const item = req.body.nameItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.render("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about")});


app.listen(3000, function(){
  console.log("Server is running at port 3000");
})
