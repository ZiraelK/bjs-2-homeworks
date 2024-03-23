function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    
}
//this.marks = [];
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    
    if (marksToAdd.length === 0) {
        return;
      } 
      this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
    let sum = 0;
    let length = this.marks.length;
    if (length == 0) {
      return 0;
    } else {
      for (let i = 0; i < length; i += 1) { 
        sum += this.marks[i]; 
      }
      return sum / length;
    }
}

Student.prototype.exclude = function (reason) {
    if (!this.excluded) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
    if (this.subject == 0) {
        !this.marks.push(...marksToAdd);
      }
}
