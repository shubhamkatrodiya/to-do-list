
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setinput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [fin, setfin] = useState([]);
  const [searchInfor, setSearchinfo] = useState([])

  const add = () => {
    if (edit !== null) {
      const updated = [...todo];
      setSearchinfo([...todo])
      updated[edit] = { input: input, checked: false };
      setTodo(updated);
      setfin(updated);
      setEdit(null);
      setinput("");
    }
    else {
      setTodo([...todo, { input: input, checked: false }]);
      setSearchinfo([...todo])
      setfin([...todo, { input: input, checked: false }]);
      setinput("");
    }
  }

  const del = (index) => {
    console.log("index = " + index)
    let d = todo.filter((val, id) => {
      console.log("id =", id)
      return id !== index;
    })
    setTodo(d);
    setfin(d);
  }

  const update = (index) => {
    setEdit(index);
    setinput(todo[index].input);
  };

  const handlecheck = (index) => {
    const check = [...todo];
    check[index].checked = !check[index].checked;
    setTodo(check);
  }

  const ser = () => {

    let info = fin.filter((val, id) => {
      return val.input === search;
    })
    console.log('info', info)
    setTodo(info);
  }

  const completed = () => {
    let com = fin.filter((val, id) => {
      return val.checked === true ? val : false
    });

    setTodo(com);
  }
  const unc = () => {
    let uncom = fin.filter((val, id) => {
      return val.checked === false ? val : false
    });
    setTodo(uncom);
  }

  const all = () => {
    var data = [...fin];
    setTodo(data);
  }

  return (
    <div className="">
      <div className="wrapper">
        <h1>Todo List</h1>
        <div className='form'>
          <input type="text" className='input' value={input} placeholder='Enter input' onChange={(e) => { setinput(e.target.value) }} />
          <input type='button' className='btn' value={"Add input"} onClick={() => { add() }} /><br />
          <input type='text' className='input' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          <input type='button' className='btn' value={"Search"} onClick={() => { ser() }} /><br />
          <input type='button' className='btn' value={"Completed"} onClick={() => { completed() }} style={{ marginRight: "10px" }} />
          <input type='button' className='btn' value={"unc"} onClick={() => { unc() }} style={{ marginRight: "10px" }} />
          <input type='button' className='btn' value={"All"} onClick={() => { all() }} style={{ marginRight: "10px" }} />

        </div>

        <ul className='' style={{ color: " green" }} >
          {
            todo.map((ele, index) => {
              return (
                <li className='' key={index}>
                  <input type='checkbox' checked={ele.checked} onChange={() => handlecheck(index)} />
                  <span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.input}</span>
                  <input type='button' value={"Delete"} className='del' onClick={() => { del(index) }} />
                  <input type='button' value={"Edit"} onClick={() => { update(index) }} />

                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

