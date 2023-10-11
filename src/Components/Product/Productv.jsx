import React, { useState } from 'react'

const Productv = () => {
    const [v,setv]=useState([]);
    const rdbookd=(event)=>{
        fetch("https://sdbms-211-default-rtdb.firebaseio.com/product.json")
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            // console.log(data);
        console.log(snapshotToArray(data));
        setv(snapshotToArray(data));
        })
            
        }
        function snapshotToArray(snapshot){
            const array=[];
            Object.keys(snapshot).forEach((key)=>{
                array.push(snapshot[key]);

            });
            return array;
        }
  return (
    <div>
      <div>
      <button onClick={rdbookd}>view</button>
      <br></br>
      <br></br>
      <table border="1">
        <tr>
            <th>product name</th>
            <th>code</th>
            <th>maufacture</th>
            <th>price</th>
            <th>date</th>
        </tr>
        {v.map((value,index)=>{
            return(
                <tr key={index}>
                    <td>{value.productname}</td>
                    <td>{value.code}</td>
                    <td>{value.manufacture}</td>
                    <td>{value.price}</td>
                    <td>{value.date}</td>
                </tr>
            )
        })}
      </table>
    </div>
    </div>
  )
}

export default Productv

