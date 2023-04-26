const students = [
  {
    rollNo: 10001,
    name: "John",
    age: 20,
    dept: "CSE",
    year: 2023,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur hic exercitationem veritatis, vel, neque ab odio, reprehenderit iusto et porro voluptatem totam dignissimos nihil!",
  },
  {
    rollNo: 10002,
    name: "Jack",
    age: 19,
    dept: "IT",
    year: 2022,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur hic exercitationem veritatis, vel, neque ab odio, reprehenderit iusto et porro voluptatem totam dignissimos nihil!",
  },
  {
    rollNo: 10003,
    name: "Robert",
    age: 18,
    dept: "EEE",
    year: 2020,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur hic exercitationem veritatis, vel, neque ab odio, reprehenderit iusto et porro voluptatem totam dignissimos nihil!",
  },
  {
    rollNo: 10004,
    name: "Mary",
    age: 19,
    dept: "ECE",
    year: 2022,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur hic exercitationem veritatis, vel, neque ab odio, reprehenderit iusto et porro voluptatem totam dignissimos nihil!",
  },
  {
    rollNo: 10005,
    name: "Prince",
    age: 21,
    dept: "IT",
    year: 2021,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur hic exercitationem veritatis, vel, neque ab odio, reprehenderit iusto et porro voluptatem totam dignissimos nihil!",
  },
];

const result = document.querySelector(".result");
const rollnumber = document.querySelector("#rollnumber");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log(rollnumber.value);
  let searchText = rollnumber.value;
  let newStudents = students.filter(
    (student) => student.rollNo === Number(searchText)
  );
  console.log(newStudents);
  displayStudentsDetails(newStudents);
});
function displayStudentsDetails(students) {
  let data = students.map((student) => {
    return `
            <section>
                <h1>Name: ${student.name}</h1>
                <h2>Dept: ${student.dept}</h2>
                <h2>Roll No.: ${student.rollNo}</h2>
                <h3>Age: ${student.age}</h3>
                <p><strong>Year:</strong>${student.year}</p>
                <p>Desc: ${student.desc}</p>
            </section>
        `;
  });
  //   console.log(data.join(" "));
  result.innerHTML = data.join(" ");
}

let student = ["John", "Jack", "Mary"];
student.join(" ");
