
function hello(){

    var ans = false;

    alert("Hello, Welcome to Calliope");
    let usersName = prompt("What is your name?");
    while (usersName == ""){
        usersName = prompt("Come on... Give me your name...")
    }
    console.log("The user's name is ", usersName);
    let penNameOrNot = prompt("Would you like to use a pen name? (yes or no)");
    console.log("The user's response to pen name was: ", penNameOrNot );

    while(!ans){
         if(penNameOrNot.toLowerCase() == "yes" || penNameOrNot.toLowerCase() == "y"){
            let penName = prompt("What would you like your pen name to be?");
            console.log("The user's pen name is", penName);
            document.write("Hello, ", usersName," (", penName,  ") let's start writing.");
            ans = true;
        } else if (penNameOrNot.toLowerCase() == "no" || penNameOrNot.toLowerCase() == "n"){
            document.write("Hello, ", usersName, " let's start writing.");
            ans = true;
        }else{ penNameOrNot = prompt("That is an invalid answer. Please type Yes or No")}
    }
}

function skillLevel(){
var skill = prompt("On a scale from 1-10 what would you say your skill at creative writing is?")

while(skill < 0 || skill > 10 || skill == 0){
    skill = prompt("Please use a number between 1 and 10")
   
}
for (let i = 0; i < skill; i++) {
    document.write("<img class='pencil' src='./images/pencil.jpg' alt='Pencil' width='25' height='50' />")
}

}
