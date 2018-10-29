// Skapa en array som innehåller information om mina kurser

function FrontEnd(coursename, teacher, hp, grade, status){
    this.coursename = coursename;  
    this.teacher = teacher; 
    this.hp = hp;
    this.grade = grade; 
    this.status = status; 

}

let course1 = new FrontEnd("Javascript1" , "Mahmud al Hakim" , 30 , "VG" , true)
let course2 = new FrontEnd("Javascript2" , "Mahmud al Hakim" , 30 , null , false)
let course3 = new FrontEnd("Javascript3" , "Mahmud al Hakim" , 30 , null , false)
let course4 = new FrontEnd("Javascript4" , "Mahmud al Hakim" , 30 , null , false)

console.log(course1, course2, course3, course4);



