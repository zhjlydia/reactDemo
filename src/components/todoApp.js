import React from "react";
import List from "./list";
import Input from "./input";
class TodoApp extends React.Component {
    componentWillMount(){
        this.setState({
            list:['todo1','todo2','todo3']
        });
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <hr />
                            <List listItems={this.state.list} />
                            <Input/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default TodoApp;