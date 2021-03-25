class Parent {
    constructor(){
        this.fatherName = "Schewarznegger";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " "+ this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child ("Arnold");
console.log(baby.getFullName());
console.log(baby2);