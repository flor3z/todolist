import React, { Component } from 'react'
import NewToDoForm from "./NewToDoForm"
import ToDo from "./ToDo"


class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {todos: [{task: "Walk the Fish"}, {task: "Groom the Chickens"}]}
        this.create = this.create.bind(this);
    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task}/>
        })
        return (
            <div>
                <h1>ToDo List!</h1>
                <NewToDoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div>
        )
    }
}
export default ToDoList;