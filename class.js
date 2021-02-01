class StudentId{
constructor(sId,sName){
    this.id = sId;
    this.name = sName;
}
}
const student1 = new StudentId(1 , "tonny");
const student2 = new StudentId(2 ,"sagor");
console.log(student1.id, student2);