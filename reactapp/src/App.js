import React from 'react';
import axios from 'axios';

class App extends React.Component{
    constructor(){
        super();
        this.state= {
            fullname:'',
            email:'',
            password:'',
            address:''
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            fname : this.state.fullname,
            email : this.state.email,
            password : this.state.password,
            address : this.state.address
        }
        console.log(newUser);
        axios
        .post('/', newUser)
        .then(res=>console.log('success'))
        .catch(err=>console.log('failes'))
    }
    render(){
        return(
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="form">
                    </div>
                    <div className="note text-center">
                        <h2>React app</h2>
                    </div>
                    <form onSubmit = {this.onSubmit} >
                        <div className="form-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="fullname" className="form-control" placeholder="Your Name *" value={this.state.fname} onChange = {this.onChange}  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="address" className="form-control" placeholder="Address *" value={this.state.address} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="email" className="form-control" placeholder="Your Email *" value={this.state.email} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="password" className="form-control" placeholder="Password *" value={this.state.password} onChange={this.onChange} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btnSubmit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default App;
