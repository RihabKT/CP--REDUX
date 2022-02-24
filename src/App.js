import './App.css';
import React, {useState} from 'react';
import ListTask from './Components/ListTask/ListTask';
import AddTask from './Components/AddTask/AddTask';
import Filter from './Components/Filter/Filter';



function App() {
  
  const [showDone, setshowDone] = useState(false);

return (
    <div className="App">
      <h1> HEALTHY DAILY ROUTINE TASKS:</h1>
     
    <Filter setshowDone={setshowDone}  showDone={showDone}/>
  <ListTask showDone={showDone} />
  <AddTask />

    </div>
  );
}

 

export default App;
