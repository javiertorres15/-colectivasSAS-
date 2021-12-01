import logo from './logo.svg';
import './App.css';

//Importando demo exportado como Default
//import Demo from './components/demo'

//Importando demo exportado como funcion
//import {Demo} from './components/demo'

//Importando componentes empaquetados dentro de otro componente
//import {Demo, Task} from "./components/index"

import React, {useState, useRef} from 'react';
import TodoList from './components/todo/todo-list'

function App() {
  //Creando o declarando estados
  const init = [
    {text: "Levantarme", color: 'blue', state: false}
  ];
  const [items, setItems] = useState(init);

  //Creando funciones de boton
  const add = ()=>{
    let value = inputRef.current.value;

    //Rescatando valores actuales de array, y agregamos un elemento nuevo
    //Forma desglosada
    
    //Forma pura javascript
    setItems([...items, {text: value, color: 'blue', state: false}])
  }

  return (
    <div className="container" style={{marginTop: '5%'}}>
      <div className="row">
        <div className="col-6">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" 
          aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button class="btn btn-outline-secondary" type="button" 
          id="button-addon2">Add</button>
        </div>
        </div>
        <div className="col-6">
          <TodoList items={items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
