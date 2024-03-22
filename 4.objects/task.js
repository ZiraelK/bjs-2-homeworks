function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks.length == 0) {
        return;
      } else {
        this.marks = marksToAdd;
      }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    let length = this.marks.length;
    if (length == 0) {
      return 0;
    } else {
      for (let i = 0; i < length; i += 1) { 
        sum += numbers[i]; 
      }
      return sum / length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
