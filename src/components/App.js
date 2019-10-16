import React,{Component} from 'react';


import '../css/App.css';

import AddAmount from './AddAmount.js';

import SideBar from './SideBar.js';
import { thisTypeAnnotation } from '@babel/types';
import ListEmi from './ListEmi.js';



class App extends Component {

  users = [];
  timewrappedUsers = [];

  constructor() {

    super();
    
    this.state = {
     
      amountValue:500,
      monthsValue:6,
      emi:0,
      interest:0,
      timestamp:new Date().getTime()

    }




    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleHistoryDivClicked = this.handleHistoryDivClicked.bind(this);


  }


  componentDidMount() {

    

    this.users  = JSON.parse(localStorage.getItem("users") || "[]");
  

    // this.users.push(this.state);

    // localStorage.setItem("users", JSON.stringify(this.users));

    

    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amountValue+'&numMonths='+this.state.monthsValue+'').then(response => response.json()).then(result => {
         
    

        this.setState(

             {
                emi:result.monthlyPayment.amount,
            interest:result.interestRate
            }
        )
       

    });




  }

  handleAmountChange(value) {
        
    this.setState({amountValue:value});

    


    fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amountValue+'&numMonths='+this.state.monthsValue+'').then(response => response.json()).then(result => {
         
    

    //   this.setState({
    //       emi:result.monthlyPayment.amount,
    //       interest:result.interestRate,
        
    //   })

    this.setState(

        {
           emi:result.monthlyPayment.amount,
       interest:result.interestRate,
       timestamp:new Date().getTime()
       }
   )


     

  });

  

  this.users = JSON.parse(localStorage.getItem("users") || "[]");
  

  var flag =0;
     this.users.forEach((item) => {
              if (item.monthsValue == this.state.monthsValue && item.amountValue == this.state.amountValue) {
                 flag++;
              }
     });
  
     if(flag == 0) {
  this.users.push(this.state);
     } 
  
    
  
     
  
  
   localStorage.setItem("users", JSON.stringify(this.users));

    


}

handleMonthChange(value) {
  this.setState({monthsValue:value});
  





  fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amountValue+'&numMonths='+this.state.monthsValue+'').then(response => response.json()).then(result => {
     


//   this.setState({
//       emi:result.monthlyPayment.amount,
//       interest:result.interestRate,
    
//   })

this.setState(

    {
       emi:result.monthlyPayment.amount,
   interest:result.interestRate,
   timestamp:new Date().getTime()
   }
)
 

});



this.users = JSON.parse(localStorage.getItem("users") || "[]");
  

var flag =0;
   this.users.forEach((item) => {
            if (item.monthsValue == this.state.monthsValue && item.amountValue == this.state.amountValue) {
               flag++;
            }
   });

   if(flag == 0) {
this.users.push(this.state);
   } 

  

   


 localStorage.setItem("users", JSON.stringify(this.users));


}

handleHistoryDivClicked(item) {


  // this.setState({monthsValue:item.monthsValue,amountValue:item.amountValue});
  // this.setState({emi:item.emi,
  //   interest:item.interest});

  fetch('https://ftl-frontend-test.herokuapp.com/interest?amount='+item.amountValue+'&numMonths='+item.monthsValue+'').then(response => response.json()).then(result => {
     


//   this.setState({
//       emi:result.monthlyPayment.amount,
//       interest:result.interestRate,
    
//   })

this.setState(

    {monthsValue:result.numPayments,
      amountValue:result.principal.amount,
       emi:result.monthlyPayment.amount,
   interest:result.interestRate,
   timestamp:new Date().getTime()
   }
);
 

});


this.users = JSON.parse(localStorage.getItem("users") || "[]");
  

var flag =0;
   this.users.forEach((item) => {
            if (item.monthsValue == this.state.monthsValue && item.amountValue == this.state.amountValue) {
               flag++;
            }
   });

   if(flag == 0) {
this.users.push(this.state);
   } 

  

   


 localStorage.setItem("users", JSON.stringify(this.users));


  



}



  render() {
  return (
    <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">


              <SideBar pastqueries = {this.users} handleHistoryDivClicked={this.handleHistoryDivClicked}/>
                <AddAmount impstate = {this.state} handleAmountChange={this.handleAmountChange} handleMonthChange={this.handleMonthChange} />
               <ListEmi impstate = {this.state}/>
               
              
                {/* <AddAppointments formDisplay={this.state.formDisplay} toggleForm={this.toggleForm} addAppointment={this.addAppointment}/>
                <SearchAppointments orderBy={this.state.orderBy} orderDir={this.state.orderDir} changeOrder={this.changeOrder} searchApts={this.searchApts} />
                <ListAppointments appointments = {filteredApts} deleteAppointment={this.deleteAppointment} updateContent={this.updateContent} /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
  );
  }
}

export default App;
