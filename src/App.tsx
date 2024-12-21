import { useEffect, useReducer } from 'react';
import './App.css'
import { Dashboard } from './components/dashboard'
import { NoteContext } from './context/context'
import { reducer } from './context/reducer';
import { initalState } from './context/state';
import { getAllNode } from './context/api';
import { Types } from './context/types';

function App() {
  useEffect(()=> {
    getAllNode()
    .then(response => {
    dispatch ({type:Types.SET_TASKS, payload:response})
    })
  })
  const [state, dispatch] = useReducer(reducer, initalState); 
  return <>
    <NoteContext.Provider value={{state , dispatch}}>
      <Dashboard />
    </NoteContext.Provider>
    </>
  
}

export default App
