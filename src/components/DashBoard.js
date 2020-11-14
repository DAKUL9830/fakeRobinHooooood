



import React from 'react';

import StockList from './StockList';
import Graph from './Graph';
//import BuyShare from './BuyShare';
//import Share from './Share';
//import Portfolio from './Portfolio'

const url='ws://stocks.mnet.website/';
class Dashboard extends React.Component{
   constructor(){
       super()
    this.state={
       stocks:{},
       trend:undefined, 
    }
    this.updatedStocks=this.updatedStocks.bind(this);
    this.selectStock=this.selectStock.bind(this);
}

     componentDidMount(){
        this.conn=new WebSocket(url);
        this.conn.onmessage=this.updatedStocks;
     }
     updatedStocks(ev){
        
         let result=JSON.parse(ev.data);
         let liveTime=Date.now();
         let up=0;
         let down=0;
         let newStocks=this.state.stocks;
         result.map((stock)=>{
             if(this.state.stocks[stock[0]]){
                 newStocks[stock[0]].currentPrice>Number(stock[1])?
                 up++:
                 down++;
                 newStocks[stock[0]].currentPrice=Number(stock[1]);
                newStocks[stock[0]].history.push({time:liveTime,value:Number(stock[1])})
             }
             else{
                newStocks[stock[0]] = { currentPrice: stock[1], history: [{time: Date.now(), value: Number(stock[1])}], isSelected: false }
             }
         })

         this.setState({stocks:this.state.stocks,trend:this.trend(up,down)})

     }
   
     trend(up,down){
         if(up===down){
             return undefined;
         }
         return up>down?"up":"down";

     }
     selectStock(name){
         let newStocks=this.state.stocks;
         newStocks[name].is_selected=!newStocks[name].is_selected;
         this.setState({stocks: newStocks});
     }

    render(){
        console.log(this.state.stocks)
        return(
            
            <div className='container' >
                <div className='columns'>
                  <StockList 
                  stocks={this.state.stocks}
              
                  trend={this.trend}
                  selectStock={this.selectStock}

                  
                  />
                  {/* <BuyShare/>
                  <Share/> */}
                  {/* <Portfolio/> */}
                  <Graph stocks={this.state.stocks}/>
                </div>
                

         </div>

            
        );
    }
}
export default Dashboard;
