import React,{Component} from 'react' 



class SideBarContent extends Component {




    render() {

       var sorted = this.props.pastqueries.sort((a,b) => b.timestamp - a.timestamp);
  

        return(
<div>
        <div>
            <h5>History</h5>
        </div>

<div className="appointment-list item-list mb-3">
{sorted.map(item => (
 
 <div style={{color:"blue",border:"1px solid black",cursor:"pointer"}} id="SideBarDiv" onClick={() => this.props.handleHistoryDivClicked(item)} >
     <label style={{color:"black"}}>Amount</label>
     <div>{item.amountValue}</div>
     <label style={{color:"black"}}>Months</label>
     <div>{item.monthsValue}</div>
</div>

))
}

</div>
</div>

        );



    }





}

export default SideBarContent