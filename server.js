import express from "express";
const app = express();
import { createNote, getNotes , getNote, deleteNote} from "./database.js";
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const port = 8011;


app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/notes",async (req,res) =>{
    if (await getNotes() == ""){
      return res.status(400).send("<h1>O Oh! You don't have any notes to view.</h1>");
      return; 
    }
    const notes = await getNotes();
    res.render("notes.ejs",{notes});
})

app.get("/createnote",(req,res) =>{
    res.render("createnote.ejs");
})

app.get("/notes/:id",async (req,res) =>{
    const id = req.params.id;
    const note = await getNote(id);
    res.render("singlenote.ejs",{note});
})

app.post("/notes",async(req,res)=>{
    
    const {title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(201).redirect("/notes");

});

app.post("/notes/delete/:id", async(req, res) => {
  const id = +req.params.id;
  await deleteNote(id);
  res.redirect("/notes");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});