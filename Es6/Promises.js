
    let student = new Promise(function(resolve,reject){

        Read = false;

            if(Read)
                 resolve()
            else  
                 reject()
    });

    student.then(function(){
        console.log("student read the book")
    }).catch(function(){
        console.log("student not read book")
    })

    /*********************************************** */

    