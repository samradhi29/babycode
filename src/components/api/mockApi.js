// src/components/api/mockApi.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 1000 });

let students = [
  {
    id: "1",
    name: "Alice",
    email: "alice@example.com",
    course: "React",
    school: "ABC School",
    branch: "CSE",
    hobbies: "Drawing, Reading",
    description: "Hardworking and creative student.",
  },
  {
    id: "2",
    name: "Bob",
    email: "bob@example.com",
    course: "Node.js",
    school: "XYZ School",
    branch: "ECE",
    hobbies: "Gaming, Sports",
    description: "Passionate about backend technologies.",
  },
];

// GET all students
mock.onGet("/api/students").reply(200, students);

// GET student by ID
mock.onGet(/\/api\/students\/\d+/).reply((config) => {
  const id = config.url.split("/").pop();
  const student = students.find((s) => s.id === id);
  return student ? [200, student] : [404];
});

// POST new student
mock.onPost("/api/students").reply((config) => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = Date.now().toString(); // unique ID as string
  students.push(newStudent);
  return [201, newStudent];
});

export default axios;
