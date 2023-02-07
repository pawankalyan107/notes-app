const fs = require('fs')
const chalk = require("chalk")

const addNote = (title, body)=>{
  const notes = loadNotes()
  const duplicateNotes = notes.find((note)=>note.title === title)

  debugger
  
  if(!duplicateNotes){

    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('Added new Note...')
    console.log(notes)
  }else{
    console.log('Note is already exist..!')
  }
}

const removeNote = (title)=>{
  const notes = loadNotes()
  const updateNotes = notes.filter((note)=>note.title !== title)
  if(notes.length > updateNotes.length){
    console.log(chalk.bgGreen('Note Removed!'))
    saveNotes(updateNotes)
  }else{
    console.log(chalk.bgRed('No note Found!'))
  }
}

const saveNotes = (notes)=>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = ()=>{
  const notesData = loadNotes()
  console.log(chalk.yellow('your notes: '))
  notesData.forEach(note =>console.log(note.title));
}

const readNotes = (title) => {
  const notes = loadNotes()
  const note =  notes.find((note) => note.title === title)
  if(note){
    console.log(chalk.inverse.bgGreen(note.title) + ' and body '+ note.body )
  }else{
    console.log(chalk.red('No note found'))
  }
}

const loadNotes = ()=>{
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    const data = JSON.parse(dataJSON)
    return data
  }catch (e){
    return []
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNotes
}