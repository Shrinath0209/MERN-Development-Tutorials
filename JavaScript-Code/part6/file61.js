// const emp1 = {
//     name:"John",
//     display:function(){
//         console.log(this.name)
//     }
// }
// const emp2 = {
//     name:"Cathy",
//     display:function(){
//         console.log(this.name)
//     }
// }
// emp1.display()
// emp2.display()


// function Employee(name){
//     this.name=name;
//     this.display(){
//         console.log(this.name)
//     }
// }
// const emp1 = new Employee("John")
// emp1.display()
// const emp2 = new Employee("Cathy")
// emp1.display()

// Prototype

function Employee(name){
    this.name=name;
}
Employee.prototype.display=function(){
    console.log(this.name)
}
const emp1 = new Employee("John")
emp1.display()
const emp2 = new Employee("Cathy")
emp2.display()
