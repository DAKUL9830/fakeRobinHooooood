import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import TimeAgo from 'react-timeago'

class Row extends React.Component {

  color(stock){
    if(stock.currentPrice < stock.history.slice(-2)[0].value){
      return 'red';
    }
    else if(stock.currentPrice > stock.history.slice(-2)[0].value){
      return 'green';
    }
    else{
      return null;
    }
  }

  render() {
    let history = this.props.currentStock.history;
    return (
      <tr  className={ this.props.currentStock.is_selected ? 'selected' : null } id={this.props.name} onClick={this.props.selectStock.bind(this, this.props.name)} >
        <td className='color'> {this.props.name.toUpperCase()} </td>
        <td className={this.color(this.props.currentStock)}>
          {this.props.currentStock.currentPrice.toFixed(2)}
        </td>
        <td className={this.color(this.props.currentStock)}>
          <Sparklines data={history.map((history) => { return history.value})}  className={this.color(this.props.currentStock)}>
            <SparklinesLine  />
          </Sparklines>
        </td>
        <td className='updated_at' className='color' >
          <TimeAgo date={ history.slice(-1)[0].time } />
        </td>
      </tr>
    );
  }
}

export default Row;