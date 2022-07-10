import React from 'lib-app/react';
import Button from 'component-app/Button'
import Dialog from 'component-app/Dialog'
import ToolTip from "component-app/ToolTip"
export default class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        dialogVisible:false
      }
      this.handleClick = this.handleClick.bind(this);
      this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
    }
    handleClick(ev){
      console.log(ev);
      this.setState({
        dialogVisible:true
      })
    }
    HanldeSwitchVisible(visible){
      this.setState({
        dialogVisible:visible
      })
    }
    render(){
      return (<div>
        <h4>
          Buttons:
        </h4>
        <Button type="primary"/>
        <Button type="warning"/>
        <h4>
          Dialog:
        </h4>
        <button onClick={this.handleClick}>click me to open Dialog</button>
        <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible}/>
        <h4>ToolTip</h4>
        <ToolTip content="ToolTip" message="hover content"/>
      </div>)
    }
  }