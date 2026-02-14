import express from "express";
import {
  createNote,
  deleteNotes,
  getallnotes,
  updateNote,
  getNotesByID,
} from "../controllers/notesController.js";
const router = express.Router();

// router.get("/",(req,res) =>{
//   res.status(200).send("you got 20 notes");
// });

router.get("/", getallnotes);
router.get("/:id", getNotesByID);


router.post("/", createNote);
// router.post("/",(req,res) =>{
//   res.status(201).json("Notes craeted successfully");
// })

router.put("/:id", updateNote);

router.delete("/:id", deleteNotes);
export default router;
