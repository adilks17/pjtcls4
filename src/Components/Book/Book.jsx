import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const Book = () => {
const [bn,setBn]=useState('');
const [au,setAu]=useState('');
const [pu,setPu]=useState('');
const [error,setError]=useState(false)

const readBn =(event) => {
event.preventDefault();
setBn(event.target.value);
console.log(event.target.value);
}
const readAu =(event) => {
    event.preventDefault();
    setAu(event.target.value);
    console.log(event.target.value);
}
const readPu =(event) => {
    event.preventDefault();
    setPu(event.target.value);
    console.log(event.target.value);
}
const checkfilldata =(event) =>{
      event.preventDefault();
    if(bn.trim() ===''||au.trim() ===''||pu.trim() ==='')
    {
        setError(true);
        return;
    }
    else{
        setError(false);
        const myobj={
            bookname:bn,
            authour:au,
            publisher:pu
        }
        
        fetch("https://sdbms-211-default-rtdb.firebaseio.com/book.json",
        {
          method:"POST",
          body:JSON.stringify(myobj),
          headers:{"Content-Type":"application/json",
        }
        }
        );
        console.log(myobj);
        alert("Record saved");
    }

}

  return (
    <div>
      <TextField id="standard-basic" label="Book Name" variant="standard" onChange={readBn} /> <br />
      <TextField id="standard-basic" label="Authour" variant="standard" onChange={readAu}/> <br />
      <TextField id="standard-basic" label="Publisher" variant="standard" onChange={readPu}/> <br /> <br />
      <Button variant="contained" onClick={checkfilldata}>save</Button><br />
      {error && 'Fill the form'}
    </div>
  )
}

export default Book
