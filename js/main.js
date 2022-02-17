//==================Exercise #1 ==========//
/*Write a function that takes in the dog_string and the list of dog_names, loops through 
the dog_names list and checks that the current name is in the dog_string passed in. The output should be:
"the matched dog_name" if name is in the string, if no matches are present console.log(print) "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
//====1st attempt
// function findWords(stringy,names){
        
//     while(names in stringy){
//         return `Matched: ${names}`
//     }
//     return `no matches`
// }
// console.log(findWords(dog_string.search(dog_names)))
// // Call method here with parameters


//===second attempt
function findSomeWords(dog_string,dog_names){
    for(let i = 0; dog_string.length; i++){
        if(dog_string[i]==dog_names){
            return `matched: ${dog_names[i]}`
        }else{
            return "No Matches"
        }
    }


}
console.log(findSomeWords(dog_string,dog_names))






//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceIndex(){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < givenArr.length; i++){
        if(i % 2 == 0){
            givenArr.splice(i,1,'even index')
        }
    }
    return givenArr
}

console.log(replaceIndex(givenArr))



// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]