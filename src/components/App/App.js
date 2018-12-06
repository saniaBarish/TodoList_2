import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from "../ItemAddForm"

import "./App.css"

class App extends Component{

  dataId = 100;

  state={
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    filterBy: "",
    searchBy: ""
  }

  onChangeFilter = (state = "All") =>{
    this.setState({
      filterBy: state
    })
  }

  onChangeSearch = (search = "") => {
    console.log("search")
    this.setState({
      searchBy: search
    })
  }

  getFilterTodoData = (state = "All", search = "") =>{
    return this.state.todoData.filter((item) => {
      if (state === "All") return item
      else if (state === "Active") return !item.done
      else if (state === "Done") return item.done

      return item
    }).filter((item) => item.label.toLowerCase().includes(search))
  }

  createTodoItem(label){
    return{
      label,
      important: false,
      done: false,
      id: this.dataId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter(el => el.id !== id)
      }
    })
  }

  addItem = (label) => {
    this.setState(({todoData}) => {
      return{
        todoData: [...todoData, this.createTodoItem(label)],
      }
    })
  }

  onItemDone = (id) =>{
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperty(todoData, id, "important")
      }
    })
  }


  toggleProperty = (arr, id, property) => {
    return arr.map(el => {
      if (el.id === id){
        el[property] = !el[property];
        return el
      }
      return el
    })
  }

  render(){
    const {todoData} = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onChangeSearch={this.onChangeSearch}/>
          <ItemStatusFilter onChangeFilter={this.onChangeFilter}/>
        </div>
  
        <TodoList todos={this.getFilterTodoData(this.state.filterBy, this.state.searchBy)} 
        onDelete={this.deleteItem}
        onItemDone={this.onItemDone}
        onToggleImportant={this.onToggleImportant}/>

        <ItemAddForm onAddItem = {this.addItem}/>
      </div>
    );
  };
};

export default App;

