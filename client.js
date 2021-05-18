console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');
    printPeople(people);
    randomName();

    $('.portraits').on('click', '.picture', handleClick);
}

//random number generator
console.log(randomNumber);


function printPeople(){ //print out the people in a new div with their photo
    console.log('in print people');
    
    for (let info of people)

    $('.portraits').append(`
        <div class= "picture" data-name=${info.name} data-git="${info.githubUsername}">
            <img src="https://github.com/${info.githubUsername}.png?size=250">
        </div>
    `)

}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function randomName(){ //generate a random name by referencing randomNumber function and names in the people array
    $('.nameClick').text(`${people[randomNumber(0,10)].name}`);

}


function handleClick(){  //Distinguish on click the closest picture and name and if it is right or wrong send an alert to the browser
    let thisName = $(this).closest(`.picture`).data('name');
    let personClicked = $('.nameClick').text();

    if(thisName === personClicked){
        alert('Yes!');
        randomName();
        
    } else {
        alert('wrong');
    }
} // end handleClick 
