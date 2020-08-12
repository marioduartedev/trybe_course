const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const modifyObject = (obj, key, value) => obj[key] = value;

const keyList = obj => Object.keys(obj);

const objSize = obj => keyList(obj).length;

const valueList = obj => Object.values(obj);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const students = () => {
  total = 0;
  for(i in allLessons) {
    total += allLessons[i].numeroEstudantes;
  }
  return total;
}

const getValueByNumber = (obj, number) => Object.entries(allLessons[obj])[number][1];

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};

const studentsNumber = (sub) => {
  let count = 0;
  for (i in allLessons) {
    if (allLessons[i].materia === sub) {
      count += allLessons[i].numeroEstudantes;
    }
  }
  return count;  
}
const createReport = (obj, teacher) => {
  report = {
    professor: '',
    aulas: '',
    estudantes: ''
  };
  report.professor = teacher;
  let classe = [];
  for (i in allLessons) {
    if (allLessons[i].professor === teacher) {
      classe.push(allLessons[i].materia);
    }
  }
  report.aulas = classe;
  report.estudantes = studentsNumber(classe[0]);
  return report;
} 
console.log(createReport(allLessons, 'Maria Clara'));