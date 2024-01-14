// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
     cats.push(name)

}


function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
   cats.pop()

}

function destructivelyRemoveFirstCat(){
    cats.shift()
}




let newarray = [...cats]
function appendCat(name){
   
    newarray.push(name)
  
   return newarray;

}

prependCat =(name)=>{
    let arraytwo = [...cats]
    arraytwo.unshift(name)
    return arraytwo;

}


removeLastCat = (name)=>{

let removearray = [...cats]
removearray.pop()
return removearray;

}


removeFirstCat = (name)=>{
    let removeFirstCatarray = [...cats]
    removeFirstCatarray.shift()
    return removeFirstCatarray;

}
