const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// const { argv, demandOption } = require('yargs')


//customize  yargs version
yargs.version("1.1.0")

//create yargs command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
     notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
   
    handler(argv) { 
       notes.removeNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing out notes',
    handler() {
       notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading the new note',
    builder: {
        title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string' 
        }
    },
    handler(argv) {
       notes.readNote(argv.title)
    }
})


// console.log(yargs.argv)

yargs.parse()




