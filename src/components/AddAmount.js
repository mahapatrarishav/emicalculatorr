import React , {Component} from 'react';
import InputRange from "react-input-range";
import '../css/AddAmount.css';



//import ListEmi from './ListEmi.js';


import "react-input-range/lib/css/index.css";



class AddAmount extends Component {

     

    // constructor() {

    //   super();
      
    //   this.state = {
       
    //     amountValue:500,
    //     monthsValue:6,
    //     emi:0,
    //     interest:0


    //   }




    //   this.handleAmountChange = this.handleAmountChange.bind(this);
    //   this.handleMonthChange = this.handleMonthChange.bind(this);


    // }

      




    

   


     

    render() {

      return (
          
     <div className="addamount">
         <br/>
         
      <h4>I want to borrow ${this.props.impstate.amountValue}</h4>
           <br/>
           
      <InputRange
          step={100}
          maxValue={5000}
          minValue={500}
          value={this.props.impstate.amountValue}
          onChange={(value) => this.props.handleAmountChange(value)}
        />

        <br/>
        

     <h4>
          Over {this.props.impstate.monthsValue} months </h4>
          <br/>
          
          
        <InputRange
          step={1}
          maxValue={24}
          minValue={6}
          value={this.props.impstate.monthsValue}
          onChange={(value)=> this.props.handleMonthChange(value)}
        />
        <br/>
       <br/>
        

     </div>
     
     
      );

    }




}

export default AddAmount