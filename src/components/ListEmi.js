import React,{Component} from 'react';
import '../css/ListEmi.css';

class ListEmi extends Component {




render() {
 console.log(this.props.emi);
  return(
      <div className="listemi"> 
      <div>
         <span>EMI</span>
          <div> {this.props.impstate.emi} </div></div>
         <div><span>@ Interest Rate of</span> <div>{this.props.impstate.interest} </div></div>
           </div>
  );


}



}

export default ListEmi