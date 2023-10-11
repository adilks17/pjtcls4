import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Product = () => {
  const [nm,setNm]=useState('');
  const [cd,setCd]=useState('');
  const [mfg,setMfg]=useState('');
  const [pr,setPr]=useState('');
  const [dt,setDt]=useState('');
  const [error,setError]=useState(false);

  const readNm =(event) => {
    event.preventDefault();
    setNm(event.target.value);
    console.log(event.target.value);
    }
  const readCd =(event) => {
      event.preventDefault();
      setCd(event.target.value);
      console.log(event.target.value);
      }
  const readMfg =(event) => {
        event.preventDefault();
        setMfg(event.target.value);
        console.log(event.target.value);
        }
  const readPr =(event) =>
   {
        event.preventDefault();
          setPr(event.target.value);
          console.log(event.target.value);
          }
        
    const readDt =(event) => {
            event.preventDefault();
            setDt(event.target.value);
            console.log(event.target.value);
            }

            const checkfilldata =(event) =>{
              event.preventDefault();
            if(nm.trim() ===''||cd.trim() ===''||mfg.trim() ===''||pr.trim() ===''||dt.trim() ==='')
            {
                setError(true);
                return;
            }
            else{
                setError(false);
                const myobj={
                    productname:nm,
                    code:cd,
                    manufacture:mfg,
                    price:pr,
                    date:dt

                }
                
                fetch("https://sdbms-211-default-rtdb.firebaseio.com/product.json",
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
      <h2>Product Details</h2>
      <TextField id="outlined-basic" label="name" variant="outlined" onChange={readNm} /> <br /><br />
      <TextField id="outlined-basic" label="code" variant="outlined" onChange={readCd}/> <br /><br />
      <TextField id="outlined-basic" label="manufacture" variant="outlined" onChange={readMfg}/><br /> <br />
      <TextField id="outlined-basic" label="price" variant="outlined" onChange={readPr}/><br /> <br />
      <TextField id="outlined-basic" label="date" variant="outlined" onChange={readDt}/><br /><br />
      <Button variant="contained" onClick={checkfilldata}>save</Button><br />
      {error && 'Fill the form'}
     
      
    </div>
  )
}

export default Product
