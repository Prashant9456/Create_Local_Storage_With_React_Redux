import React from 'react';

import store from './store/store';

function App() {
  const localStorageMiddle=({getState}:{getState:any})=>{
    return (next: (arg0: any) => any)=> (action: any)=>{
      const result =next(action);
      localStorage.setItem('hello',JSON.stringify(getState()));
      return result;
    };
  };
  const getValue=()=>{
      if(localStorage.getItem('hello')!==null){
        return JSON.parse(localStorage.getItem('hello')!);
      }
  }

  const authState = store.getState().locals;
  localStorage.setItem('local', JSON.stringify(authState))
  localStorage.getItem('local');


  return (<>
    
    <div >
     
      <h1>
      hello</h1>
    </div>
</>

  );
  
}
export default App;
