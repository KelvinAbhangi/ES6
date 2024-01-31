class User {

    constructor(name){
        this.name = name;

    }

    yourname(){
        console.log(this.name);
    }
}

let user = new User('Kelvin');
user.yourname();