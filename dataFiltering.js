let matryoshka = {
    name: "Katie",
    eyeColor: "Blue",
    hairColor: "Black",
    content: {
        name: "Ren",
        eyeColor: "Blue",
        hairColor: "Black",
        content: {
            name: "Stimpy",
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
        }
    }
};

// function getNames(obj) {
//     console.log(obj.name);
//     if(obj.hasOwnProperty('content')) {
//         getNames(obj.content);
//     }
// }

const getNames = doll => {
    console.log(doll.name);
    if(doll.hasOwnProperty('content')) {
        getNames(doll.content);
    }
}


getNames(matryoshka);