import React,{Component} from "react";
import Sidebar from "react-sidebar";
import SideBarContent from "./SideBarContent.js";


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      docked:true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<SideBarContent pastqueries={this.props.pastqueries} handleHistoryDivClicked={this.props.handleHistoryDivClicked}/>}
        open={this.state.sidebarOpen}
        docked={this.state.docked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white"} }}
      >
        
      </Sidebar>
    );
  }
}

export default SideBar