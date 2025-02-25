class Parent{
    constructor(name,age,gender){
        this.name = name;
        this.age=age;
        this.gender=gender;
    }
    display(){
        console.log(`Name: ${this.name} Age: ${this.age} Gender: ${this.gender}`);
}
}
const parent = new Parent('John', 45,'male');
console.log(parent.display());