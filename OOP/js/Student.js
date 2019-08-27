// class Student {
//       setFirstName(firstName){
//      this.firstName = firstName;
//         }
//           getFirstName(){
//               console.log(this.firstName);
//           }  
// }
// const student1 = new Student();
// const student2 = new Student();
// const student3= new Student();

// student1.setFirstName("romdul");
// student2.setFirstName("liva");
// student3.setFirstName("lisa");

// student1.getFirstName();
// student2.getFirstName();
// student3.getFirstName();

 export default class User {
  setUser(username){
    this.username = username;
}
getUser() {
    console.log(this.username);
}
setFirstname(firstname){
   this.firstname = firstname;
}
getFirstName(){
     console.log(this.firstname);
}
setLastname(lastname){
    this.lastname = lastname;
}
getLastName(){
    console.log(this.lastname);
}
setAge(age){
    this.age = age;
}
getAge(){
    console.log(this.age);
}
}
const user1 = new User();
user1.setFirstname("visa");
user1.setLastname("Souy");
user1.setAge(100);
user1.getFirstName();
user1.getLastName();
user1.getAge();



class Person extends User{
    welcom(){
        console.log("he lisa");
    }
}
const p1 = new Person();
p1.welcom()
p1.setAge(10);
p1.getAge()




















