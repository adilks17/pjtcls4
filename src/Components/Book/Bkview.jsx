import React,{useState} from 'react'

const Bkview = () => {
    const [viewd,setViewdata] = useState([]);
    const readbookdata=(event) =>{
        
        fetch("https://sdbms-211-default-rtdb.firebaseio.com/book.json")
        .then((response) => {
            return response.json()
          }).then((data) => {
            // console.log(data);
            
            console.log(snapshotToArray(data));
            setViewdata(snapshotToArray(data));
          }) 

    }

    function snapshotToArray(snapshot) {
        const array = [];
    
        Object.keys(snapshot).forEach((key) => {
          array.push(snapshot[key]);
        });
    
        return array;
      }

  return (
    <div>
       <button type='submit' onClick={readbookdata}>View</button>
       <br/>
       <br/>
       <table border="1">
        <tr>
        <th>Book Name</th>
        <th>Author</th>
        <th>Publisher</th>
        </tr>
        {viewd.map((value,index)=>{
                  return(
                    <tr key={index}> 
                      
                      <td>{value.bookname}</td>
                      <td>{value.authour}</td>
                      <td>{value.publisher}</td>   
                    </tr>
                  )
                })}
       </table>
    </div>
  )
}

export default Bkview
