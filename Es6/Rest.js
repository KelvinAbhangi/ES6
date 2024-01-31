
// const order = [20.17, 18.67, 1.5, "cheese", "eggs", "milk", "bread"];
// const [total, subtotal, tax, ...items] = order;
// console.log(total, subtotal, tax, items);

/*************************************************************** */
// const student = [CSE,8,"kelvin","abhi","yash","ram"];
// const [branch, semester, ...names] = student;

// console.log(branch,semester,names);

/******************************************************************* */


// function mul(...nums){
//     let value = 1;
//     for(const num of nums){

//         value *= num;
//     }
//     return value;
// }
// console.log(mul(1,2,3,4,5));

/********************************************************************* */

function student(...enos){

    let count = 0;
    for(const eno of enos){
        count++;
    }
    return count;
}

console.log(student(1,2,3,4,5,6,7,8,9,10));

