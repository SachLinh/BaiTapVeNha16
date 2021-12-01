const app = document.querySelector(".root");
class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text:'',
        }
    }
    onChangeText = (text) =>{
        this.setState({
            text : text.target.value
        })
    }
    addTask = ()=>{
        let itemAdd = {
            id : this.state.items.length,
            task : this.state.text
        }
        this.setState({
            items : this.state.items.concat([itemAdd]),
            text : ''
        })
    }
    clearAll = () =>{
        this.setState({
            items : [],
            text : ''
        })
    }
    deleteTask = (id) => {
        let user = [...this.state.items]
        let userDelete = user.filter(item => item.id != id)
        this.setState({
            items: userDelete
        })

    }
    render() {
        return (
            <div>
                <div className="toDoApp">
                   <h1>ToDoApp</h1>
                   <div className="toDoApp_inputAdd">
                        <input className="toDoApp_input" onChange ={this.onChangeText} value={this.state.text} typy="text" id="task" name="task"/>
                        <button className={this.state.text ? 'toDoApp_add2' : "toDoApp_add"} onClick={this.addTask}>
                            Add     
                        </button>
                   </div>
                   <ul className="toDoApp_list">
                        {this.state.items.map((item,index) => {
                           return <li key={index}>{item.task}  <span className="icon"><i className="fas fa-trash"></i></span></li>
                         })}
                    </ul>
                    <div className ="toDoApp_dem">
					    <span className="toDoApp_text">
                            You have <span id="number"> {this.state.items.length } </span> pending tasks</span>
					    <button className="toDoApp_clearAll" onClick={this.clearAll}>Clear All</button>
				</div>
                </div>
            </div>
        );
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <ToDoApp/>
            </div>
            
        );
    }
}
ReactDOM.render(<MyApp/>, app);
