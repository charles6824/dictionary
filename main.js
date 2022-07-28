let input = document.getElementById('input')
let btn = document.getElementById('btn')
let Name = document.getElementById('name')
let def = document.getElementById('def')
let syn = document.getElementById('syn')

let dictionary = [
    {
        word: "Apple",
        def: "This is a fruit located in the Nothern America.",
        syn: "African star apple, balck apple"
    },
    {
        word: "big",
        def: "Something Huge",
        syn: "Huge, large, bogos, opor"
    },
    {
        word: "Female",
        def: "Anything that serves Breakfast easily",
        syn: "precious, favour, girl"
    },
    {
        word: "Chair",
        def: "A wooden Funiture",
        syn: "wood, Apoti, ijoko"
    }
]

btn.addEventListener('click', ()=>{
    let inputVal = String(input.value).trim().toLowerCase()
    if(inputVal === ""){
        alert("Ogbeni type something")
    }
    let result = dictionary.find((dict)=> dict.word.toLowerCase() === inputVal)
    if(result){
        Name.textContent = result.word
        def.textContent = result.def
        syn.textContent = result.syn
    }
    else{
        Name.textContent = "Word Not Found"
        def.textContent = ""
        syn.textContent = ""
    }
    input.value =""
})

input.addEventListener('keyup', (e)=>{
    if(e.key == 'Enter'){
        let inputVal = String(input.value).trim().toLowerCase()
    if(inputVal === ""){
        alert("Ogbeni type something")
    }
    let result = dictionary.find((dict)=> dict.word.toLowerCase() === inputVal)
    if(result){
        Name.textContent = result.word
        def.textContent = result.def
        syn.textContent = result.syn
    }
    else{
        Name.textContent = "Word Not Found"
        def.textContent = ""
        syn.textContent = ""
    }
    input.value =""
    }
})












