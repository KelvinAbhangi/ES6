const students = [
    {name: 'kelvin',eno: 1501 },
    {name: 'abhi',eno: 1502 },
    {name: 'deep',eno: 1503 },
    {name: 'vimal',eno: 1504 },
    {name: 'raj',eno: 1505 },
    {name: 'yash',eno: 1506 },
];

const editstudent =students.map(student => ({
    name: student.name.toUpperCase()  

}));

console.log(editstudent);
/****************************************************/