import React from 'react';

import './App.css';
import ListItems from './Listitems';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
  
      //this holds the list of all the added items
      items:[],
      //this holds the current item that is being typped in the  input field
      currentItem:  {
        text:'',
        key:''
      }
    }
//the handleINput method and the addItem methods are defined by us and we cannot use "this" directly  we have to bind that before using it
//binding should be done for any custom defined function in the constructor of the class 
//we can avoid binding this ,just by using arrow functions while defining our function



    this.handleInput = this.handleInput.bind(this);

    this.addItem= this.addItem.bind(this);

    this.deleteItem= this.deleteItem.bind(this);

 this.setUpdate= this.setUpdate.bind(this);

  }





//we cannot update the state directly we need to use the setState method of react to  change the state
  handleInput(e){

    this.setState({
      currentItem: {
        text: e.target.value,
        key:Date.now()
      }
    })
  }



  //method for adding an item to a list of objects stored in an array

  addItem(e){
   e.preventDefault();

   const newItem= this.state.currentItem;

   console.log(newItem);

   //if the new item text is npoot empty then run the code below
  if(newItem.text!==""){
    const newItems = [...this.state.items, newItem];  //destructring assignment in es6   "..." is called the spread operator used to join two arrays watch the video 
    //on this topic by webdevsimplified   ----it takes the array specified and destrucres its elements into individual elements to be added in the new array
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  
  }

  console.log(this.state.items);

  }

  deleteItem(key){

    //the filter function filters all the items that matches a condition here the item whose key is matched is filtereed out 
    //that is it is deleted and trhe rest items are left as it is and is stored in the filterItems  variable
    //so this funcion helps us delete a particular item from an array of items
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({items:filteredItems,
                    currentItem:{ 
                        text:'',
                        key:''

                    }
                  })
  }


  //updating or editing a single item

  setUpdate(text,key){

    const items = this.state.items;
    items.map((item)=>{
      if(item.key===key){
        item.text=text;
      }
    });

    this.setState({items:items})

  }
  
  render(){

    return (
      <div className="App">
        <header>
          <form id="to-do-form"  onSubmit={this.addItem}    >
           
            <input type="text" placeholder="Enter text"   value={this.state.currentItem.text}      onChange={this.handleInput}></input>

            <button type="submit">Add</button>
          </form>
        </header>

        <ListItems    items={this.state.items}    deleteItem={this.deleteItem}   setUpdate={this.setUpdate}      />
      </div>
    );
  }
}
export default App;
