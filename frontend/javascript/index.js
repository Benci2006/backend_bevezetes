const { type } = require("node:os")

const postmethod = async(url, data)=>{

    try{
        const response =  await fetch(url, {
            method: "POST",
            headers: {"Content-type": "applicatiom.json"},
            body : JSON.stringify(data)
        })
    }
    catch{
        throw 
    }


}