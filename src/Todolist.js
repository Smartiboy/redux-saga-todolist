import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from "./store";
import {getInputChangeAction, getAddItemAction, getDeleteItemAction,getInitListAction} from "./store/actionCreator";
import TodolistUi from "./TodolistUi";

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        })
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    };
    handleAddItem = () => {
        const action = getAddItemAction();
        store.dispatch(action);
    };
    handleDeleteItem = (index) => {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    };

    componentDidMount() {
        const action = getInitListAction();
        store.dispatch(action);
    }

    render() {
        return (
            <TodolistUi
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleAddItem={this.handleAddItem}
                list={this.state.list}
                handleDeleteItem={this.handleDeleteItem}
            />);
    }
}

export default Todolist;
