
// number of teams initial;

let teams = 0;

// all name list;
let name_list = [];

// main array for team names;

let arr = [];

// target: adding event listener click to the fix button;

let start = document.getElementById("fix_button");

console.log(start);

start.addEventListener("click", function(event) {
    fix_team();
})


// fix team function;

const fix_team = function() {
    // setting up a main array;

    let num = parseInt(document.getElementById("input_value").value);
    teams = num;
    for(i = 0; i< num; i++) {
        arr[i] = new Array();
        // let arr_check = "xxx";
        // arr.concat(arr_check);
    }
    console.log(arr.length, "is the length of array");
    console.log(arr);
}

// adding event listener to the input to add the name;

let name_check = document.getElementById("input_button");

name_check.addEventListener("click", function() {
    add_name();
})

// add name function;

const add_name = function() {
    let name_doc = String(document.getElementById("name_value").value);
    random_num = Math.floor(Math.random() * teams);
    // if the name is already not specified;
    if (name_list.includes(name_doc)) {

    } else {

        console.log(random_num, "This is the random number alloted to the name", name_doc);

        // adding the name to the random team array;
    
        arr[random_num].push(name_doc);
        console.log(arr);

    }
    name_list.push(name_doc);

}

// adding event listener to the remove button;

let remove_doc = document.getElementById("remove_button");

remove_doc.addEventListener("click", function() {
    remove_name();
})

// remove name function ;

// const remove_name = function() {
//     let remove_doc = String(document.getElementById("remove_value").value);

//     for (let i = 0; i < teams; i++) {
//         if arr[i].length !== 0 {
//             if (remove_doc in arr[i]) {

//             }
//     }
// }


// creating a unordered list;

// adding event listner to final_team;

let final_button = document.getElementById("final_team");

final_button.addEventListener("click", function(){
    teamshow();
})

// final team document;

let final_team_doc = document.getElementById("final_teams");
console.log(final_team_doc);

const teamshow = function () {
    for (i = 0; i < teams; i++) {
        let heading = document.createElement("h3");
        heading.innerText = `Team ${i}`;
        let un_list = document.createElement("ol");
        for(j = 0; j < arr[i].length; j++) {

            let list_item = document.createElement("li");
            list_item.innerText = arr[i][j];
            un_list.appendChild(list_item);
        }
        final_team_doc.appendChild(heading);
        console.log(un_list);
        final_team_doc.appendChild(un_list);
    }
}


// fuction to refresh the page;

function refreshPage(){
    window.location.reload();
    i = 1;
    setTimeout(function() {
        target_sec.innerText = "***********"
    }, 1000);
    num_generator();
} 

