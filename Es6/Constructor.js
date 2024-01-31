class Plot{

    constructor(Addess,Size,Price){
        this.Addess = Addess;
        this.Size = Size;
        this.Price = Price;
    }
}

let Plot1 = new Plot('Junagadh',300,45000);
let Plot2 = new Plot('Rajkot',100,30000);

Plot.prototype.coutry = 'India' ;

console.log(Plot1.coutry);
console.log(Plot2);


/********************************************** */