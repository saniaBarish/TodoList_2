import React, {Component} from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {

  state = {
    but1:"btn btn-info",
    but2:"",
    but3:"",
  }

  render(){
    const {onChangeFilter} = this.props;
    const {but1, but2, but3} = this.state;
    return (
      <div className="btn-group">
        <button 
          type="button"
          className={but1 || "btn btn-outline-secondary"}
          onClick={() =>{
            onChangeFilter();
            this.setState({
              but1:"btn btn-info",
              but2:"",
              but3:""
            })
          }}    
        >All</button>
        <button 
          type="button"
          className= {but2 || "btn btn-outline-secondary"}
          onClick={() =>{
            onChangeFilter("Active");
            this.setState({
              but1:"",
              but2:"btn btn-info",
              but3:""
            })
          }}
        >Active</button>
        <button 
          type="button"
          className={but3 || "btn btn-outline-secondary"}
          onClick={() =>{
            onChangeFilter("Done");
            this.setState({
              but1:"",
              but2:"",
              but3:"btn btn-info"
            })
          }}
        >Done</button>
      </div>
    );
  };
};

export default ItemStatusFilter;