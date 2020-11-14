


import React from 'react';
import Row from './Row';



const StockList =(props)=>{
    return (
        // <h1>NEW RESULT</h1>
    <div className='card column is-one-third' id='stocks_list'>
    <div className='card-header'>
      <div className='card-header-title'>
        fakeROBINHOOOOOOOOD
       
      </div>
    </div>
    <div className='card-content'>
 
      <table className='table is-bordered'>
        <thead>
          <tr>
            <th></th>
            <th>
              
          
            </th>
            <th>trend</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.stocks).map((name,index) =>
            {
              let currentStock = props.stocks[name];
              return ( 
                // <h1>stock</h1>
                 
                <Row
                  key={index} name={name}
                  currentStock={currentStock}
                  selectStock={props.selectStock}
                />
              )
            }
          )}
      
        </tbody>
      </table>
     </div>
  </div>


    )

}
export default StockList;
