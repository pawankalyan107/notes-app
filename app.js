const chalk = require("chalk")
const notes = require("./notes.js")
const yargs = require("yargs")
const { string } = require("yargs")
const { title } = require("process")

yargs.version('17.1.0')

//add read remove list

//create add command

yargs.command({
  command : 'add',
  describe: 'add a new note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'new Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv){
    notes.addNote(argv.title, argv.body)
  }
})

//create remove command

yargs.command({
  command: 'remove',
  describe: 'removing a note',
  builder:{
    title:{
      describe: 'Remove title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    // console.log('removing the note...')
    notes.removeNote(argv.title)
  }
})

//create list command

yargs.command({
  command: 'list',
  description: 'listing the notes',
  handler(){
    notes.listNotes()
  }
})

//create read command

yargs.command({
  command: 'read',
  description: 'read notes',
  builder:{
    title: {
      description: 'Reading a note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNotes(argv.title)
  }
})

// yargs.argv
yargs.parse()