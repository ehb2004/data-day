$(document).ready(function(){
    console.log("doc is ready");

    let bearFacts = ["grizzly bears more agressive than black bears", "Bears climb faster than they run", "Black bears can smell salami at 5 miles", "They can run faster than a horse"];

    console.log(bearFacts);

   //TODO: add bear facts to dom from array

   //bear fact 1 ==> bearFacts[0]

//    $('#bearFactList').append('<li class="list-group-item">New Hard coded fact</li>');

//    $('#bearFactList').append('<li class="list-group-item">' + bearFacts[0] + '</li>');
    
//    for(index = 0; index < bearFacts.length; index++)
//     {
//         console.log(index);

//         $('#bearFactList').append('<li class="list-group-item">' + bearFacts[index] + '</li>');
//     }


    bearFacts.forEach(function(item,index){
        $('#bearFactList').append(`<li class="list-group-item">${item}</li>`);
    })

    


});
