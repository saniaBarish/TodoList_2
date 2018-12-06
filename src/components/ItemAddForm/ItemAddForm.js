import React,{Component} from "react";

import "./ItemAddForm.css"

export default class ItemAddForm extends Component{
    
    state={
        label: ""
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label:""
        })
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    render(){
    
        return(
            <form className="item-add-form d-flex"
                onSubmit={(e) => this.onSubmit(e)}>
                <input
                    type="text"
                    placeholder="What needs to be done"
                    className=" form-control"
                    onChange={(e) => this.onLabelChange(e)}
                    value={this.state.label}>
                </input>
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        );
    };
};