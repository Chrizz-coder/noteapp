// export const getallnotes = (req,res)=>{
//   res.status(200).send("Notes fetched successfully");
// }
import Note from "../models/Note.js"
export async function getallnotes(_,res){
  try{
    const notes = await Note.find().sort({createdAt: -1});
  res.status(200).json(notes);
  }
  catch(error){
    res.status(501).json({message:"Tnternal Server Error"});
  }
}
export async function getNotesByID(req,res) {
  try{
    const noteByID = await Note.findById(req.params.id);
    if(!noteByID) return res.status(500).json({message:"Note cannot be fetched"});
    res.status(200).json(noteByID);
  }
  catch{
    console.log("Error in fetching the notee");
  }
}

export async function createNote(req,res){
  try{
    const {title,content} = req.body;
    const note = new Note({title,content});
    const savedNote = await note.save(); 
    res.status(201).json(savedNote);
  }catch(error){
    res.status(502).json({message:"Internal Server Error"});
  }
  
}

export async function updateNote(req,res){
  try{
    const {title,content} = req.body;
    const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new :true,});
    if(!updateNote) return res.status(404).json({message:"Note not found"});
    res.status(200).json(updateNote);
  }
  
  catch(error){
    console.error("Error in update ",error)
    res.status(500).json({message:"Not updated"});
  }
}

export async function deleteNotes(req,res){
  try{
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if(!deleteNote) return res.status(200).json(deleteNote);
    res.status(200).json("notes deleted successfully");}
    
  catch(error){
    console.error("Error in delete",error)
    res.status(500).json({message:"Not updated"});
  }
  }

