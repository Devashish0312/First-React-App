import React, { Component } from 'react';
import Additem from './Additem'
import TodoItem from './TodoItem'

class Start extends Component{
  constructor(props){
      super(props)
      this.state={
        todos:['eat','sleep','rock']
      }

      this.onAdd = this.onAdd.bind(this)
      this.onDelete = this.onDelete.bind(this)
      
  }  

  render(){
          var todos = this.state.todos.map(function(item,index){
              return(
                  <TodoItem key={index} item={item} onDelete={this.onDelete}/>
              )
          }.bind(this))
     return(
         <div id="todo-list">
             <p>The busiest people have to most leisure</p>
             <ul>{todos}</ul>
             <Additem onAdd={this.onAdd}/>
        </div>
     )
  }

  onDelete(item){
    var updatetools = this.state.todos.filter(function(val,index){return item!==val})
    this.setState({
        todos:updatetools
    })
    

  }

  onAdd(item){
    var updatetools = this.state.todos
    updatetools.push(item)
    this.setState({
        todos:updatetools
    })
  }
}

export default Start