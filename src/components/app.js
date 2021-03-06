import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import AddItem from './add_item';
import List from './list';
import listData from '../data/list';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };
    }
    componentDidMount(){
        this.getListData();
    }
    addItem(item){
     this.setState({
         list:[item,...this.state.list]
     });
    }
    getListData(){
        this.setState({
            list:listData
        })
    }
    render(){
        console.log('App',this.state);
        return(
    <div className="container">
       
        <h1 className="center">To Do List</h1>
        <AddItem add={this.addItem.bind(this)}/>
        <List data={this.state.list}/>
        
    </div>
    );
    }
}

export default App;
