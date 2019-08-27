

import User from './Student.js'
class Person extends User {
    welcom(){
        console.log("yes hello");
    }
}
const p1 = new Person();
p1.setFirstname("visa");
p1.welcom();
p1.setAge(100);
p1.getFirstName();
p1.getAge();