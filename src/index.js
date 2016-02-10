import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let empleados = [
  { id: 1, fullName: "Javier Cristino Priego", title: "Senior Software Engineer", department: "Development", pic: "javi.jpg" },
  { id: 2, fullName: "Álvaro Ramírez", title: "Software Gardener", department: "Development", pic: "alvaro.jpg" },
  { id: 3, fullName: "Salvador Navarro", title: "Scrum Master - Tester", department: "Testing", pic: "salva.jpg" },
  { id: 4, fullName: "Jon Nuño", title: ".NET Engineer", department: "Development", pic: "jon.jpg" },
]

ReactDOM.render(<App listado={empleados}/>, document.getElementById('root'));
