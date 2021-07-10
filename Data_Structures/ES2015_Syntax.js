//classes in javascript

class student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print_name_Age() {
        console.log("Name: " + this.name + " Age: " + this.age);        //instance function 
    }
    static s_print_name_Age(name,age){
        console.log("Name: " + name + " Age: " + age);                  //static function-- cannot be called by an instance,utility function for the class --- like private functions
    }
}

var student_1 = new student("banik",13);

student_1.print_name_Age();

student.s_print_name_Age("s_banik",13);