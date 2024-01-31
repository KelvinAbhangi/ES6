var emp_address = {  
    fullAddress: function() {  
        return this.company + " " + this.city+" "+this.state;  
    }  
}  
var address = {  
    company:"Javatpoint",  
    city:"Noida",  
    state:"UP",  
  
}  
  
console.log(emp_address.fullAddress.call(address));   
console.log(emp_address.fullAddress.apply(address));