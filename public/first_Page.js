import { Button, TextField } from '@mui/material';
import React from 'react';
import './App.css';



function App() {


  return (
    <div className="App"
      
      style={{ 
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
          }}
    
  
    >
          <div>
            <h1>Yasamin App</h1>
            <form>
              <TextField 
                id="standard-basic" 
                label="What is On your mind?" 
                value={todoInput}
                style={{maxWidth:"300px", width:"90vw"}} 
              />

              <Button type='submit' variant="outlined" onClick={addTodo} style={{display:"none"}} >Enter</Button>

            </form>
            
          </div>
      
    </div>
  );
}

export default App;
