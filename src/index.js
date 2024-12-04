function askgender(){ let gender = prompt (`Please enter your gender: Male or Female`) 
    gender =  gender.toLowerCase();
    if (gender === `female`){
        alert(`"You are a ${gender}! 👧🏽"`);
    }else if (gender === `Male`){
        alert (`"You are a ${gender}! 👦🏽"`);
    }else (gender===`` ); {
        alert(`please enter a valid gender`);
    }
}


askgender()