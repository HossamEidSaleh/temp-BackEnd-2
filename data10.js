const fs = require("fs")


const addPerson = (fname , lname , age , city , id)=>{

    const allData = loadData()

    const dblData = allData.filter((obj)=>{
        return obj.id === id || obj.city=== city
    })
    console.log(dblData)

    if(dblData.length==0){

    allData.push({
        id:id,
        fname: fname ,
        lname: lname,
        age: age,
        city: city
        
    })
    saveAllData(allData)
} else{
    console.log("ERROR DUPLICATED ID OR CITY")
}
}
// //////////////////////////////////


const loadData = ()=>{
  try{
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
  } catch {
    return []
  }
}

const saveAllData = (allData)=>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" ,saveAllDataJson )
}

///////////////////////////////////////////////


const deleteData = (id)=>{

    const allData = loadData()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    console.log(dataToKeep)

    saveAllData(dataToKeep)

}

//////////////////////////////////////



const readData = (id)=>{
    const allData =loadData()
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id 
    })
    
    if(itemNeeded){
        console.log(itemNeeded)
    }else{
        console.log("this person not found")
    }

}

///////////////////////////////////////////////////

const listData = ()=>{
    const allData = loadData()
    allData.forEach((obj) => {
        console.log(obj.fname , obj.age , obj.city)
    });
}


// ///////////////////////////////////add


const subjects = (id , sub1 =0 , sub2=0 ,sub3=0 ,sub4=0 ,sub5=0 ,sub6=0 )=>{

    const allData = loadData()

    const degrees = [sub1 , sub2 ,sub3 ,sub4 ,sub5 ,sub6]
    const totalDeg = degrees.reduce((acc,cur)=> acc + cur , 0);
    const avgDegree = Math.round(totalDeg / 6)

         

    // allData.push({
    //     id:id,
    //     sub1:sub1,
    //     sub2: sub2 ,
    //     sub3: sub3,
    //     sub4: sub4,
    //     sub5: sub5,
    //     sub6:sub6,
    //     total: totalDeg ,
    //     avg: avgDegree


        
    // })


    if(sub1 > 100|| sub2 > 100|| sub3 > 100 || sub4 > 100 || sub5 > 100 || sub6 > 100){
        console.log("ERROR SOME OF THEIR DEGREES ARE GREATER THAN 100") 
    }else{
        allData.push({
            id:id,
            sub1:sub1,
            sub2: sub2 ,
            sub3: sub3,
            sub4: sub4,
            sub5: sub5,
            sub6:sub6,
            total: totalDeg ,
            avg: avgDegree
    
    
            
        })
        // saveAllData(allData)
    }
    saveAllData(allData)

}


module.exports = {
    addPerson,
    deleteData,
    readData,
    listData,
    subjects

}

// node app.js degrees --id=500 --sub1=50 --sub2=50 --sub3=50 --sub4=50 --sub5=50 --sub6=50 