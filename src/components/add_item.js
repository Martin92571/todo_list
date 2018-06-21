import React,{Component} from 'react';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            details:''
        };


    }
   handleAddItem(e){
       e.preventDefault();
       console.log(this.state);
       this.setState({
           title:'',
           details:''
       })
       this.props.add(this.state);
   }
    render(){
        
        const {title,details}=this.state;
        return(
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                  <div className="col s6 offset-s3">
                     <label>Title</label>
                     <input type="text" name="title" onChange={e=>{this.setState({[e.target.name]:e.target.value})}} value={title}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s6 offset-s3">
                        <label>Details</label>
                            <input type="text" name="details" onChange={e=>{this.setState({[e.target.name]:e.target.value})}} value={details}/>
                        </div>
                    </div>
                  <div className="col s6 offset-3 center">
                  <button className="btn purple darken-2">Add List</button>
                  </div>
                
            </form>
        )
        
    }
}
export default AddItem;