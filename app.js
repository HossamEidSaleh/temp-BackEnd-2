const fs = require("fs")

const data10 = require("./data10")

const validator =require("validator")


const yargs = require("yargs")
const { demandOption } = require("yargs")

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "adding the first name",
            demandOption: true ,
            type : "string"
        },
        lname: {
            describe: "adding the last name",
            demandOption: true ,
            type : "string"
        }
    },
    handler: (x)=>{
        
        data10.addPerson(x.fname ,x.lname, x.age , x.city , x.id)
    }
})


////////////////////////////////////////////////////


yargs.command({
    command: "delete",
    describe: "to delete an item",
  
    handler: (y)=>{
       data10.deleteData(y.id)
    }
})

/////////////////////////////////////////////

yargs.command({
    command: "read",
    describe: "to read an item",
    builder: {
        id:{
            describe:"this is id description in read command",
            demandOption:true,
            type: "string"
        }
    },
  
    handler: (z)=>{
       data10.readData(z.id)
    }
})

/////////////////////////////////////////////////////

yargs.command({
    command: "list",
    describe: "list data",
    handler: ()=>{
        data10.listData()
    }
})

// /////////////////////////////////////

yargs.command({
    command: "degrees",
    describe: "degree of student",
    handler: (stu)=>{
        data10.subjects(
          stu.id,
            stu.sub1,
            stu.sub2,
            stu.sub3,
            stu.sub4,
            stu.sub5,
            stu.sub6,
            stu.total,
            stu.avg
        )
    }
})



yargs.parse()

