import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key: Date.now()
    }
  })
}
addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  if(newItem.text!==""){
    const newItems = [...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
}
deleteItem(key){
  const filteredItems = this.state.items.filter(item => item.key!==key);
  this.setState({items:filteredItems})
}
setUpdate(text,key){
  const items= this.state.items;
  items.map(item => {
    if(item.key==key){
      item.text=text;
    }
  })
  this.setState({
    items:items
  })
}
  render(){
    return(
      <div className='App'>

         <header>
            <form id='to-do-form' onSubmit={this.addItem}>
              <h1>What need's to be done?</h1>
              <br></br>
                <input type='text' placeholder='Enter text' value={this.state.currentItem.text} onChange={this.handleInput}/>
                <br></br>
                <button type='submit'>Add</button>
                <br></br>
            </form>
          </header>
          <ListItem items = {this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}> </ListItem>
          
      </div>
    );
  }
}

export default App;



