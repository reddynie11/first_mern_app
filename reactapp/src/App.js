import React from 'react';

class App extends React.Component{
   
    render(){
        return(
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="form">
                    </div>
                    <div className="note text-center">
                        <h2>React app</h2>
                    </div>
                    <form action="/" method="POST" >
                        <div className="form-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="fullname" className="form-control" placeholder="Your Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="add" className="form-control" placeholder="Address *" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="email" className="form-control" placeholder="Your Email *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="pwd" className="form-control" placeholder="Password *" />
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
