let matryoshka = {
    name: "Katie",
    eyeColor: "Blue",
    hairColor: "Black",
    content: {
        name: "Danielle",
        eyeColor: "Hazel",
        hobbies: ["Visiting petting zoos", "Whaling", "QAnon"],
        hairColor: "Blonde",
        content: {
            name: "Esmerelda",
            hairColor: "Brown",
            eyeColor: "Brown"
        }
    }
};


console.log()

// function getNames (obj) { 
//     if (!obj.hasOwnProperty('content')) { 
//         console.log(obj.name); 
//     } else { 
//         console.log(obj.name); 
//         getNames(obj.content); 
//     } 
// }

const getNames = obj => {
    if(!obj.hasOwnProperty("content")) {
        console.log(obj.name);
    } else {
        console.log(obj.name);
        getNames(obj.content);
    }
}


getNames(matryoshka);