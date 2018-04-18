import React, { Component } from 'react';
import './App.css';




const MyContext =  React.createContext();

class MyProvider extends Component{
  state={
        num:0,
        time:0,
  }
  render(){
    return(
        <MyContext.Provider value={{ 
            state:this.state,
            Plus : ()=>this.setState({
                num:this.state.num+1
            }),
            Mines : ()=>this.setState({
                num:this.state.num-1
            }),
            PlusT : ()=>this.setState({
                time:this.state.time+1
            }),
            MinesT : ()=>this.setState({
                time:this.state.time-1
            })
         }}>
          {this.props.children}
        </MyContext.Provider>
    )
  }
}


class Parent extends Component{
  constructor(props){
     super(props);
  }
  render(){
    return(
           <div className="Parent">
              <MyContext.Consumer>
               {(context)=>(
                  <React.Fragment>
                     <button onClick={context.Plus}>Parent N+</button>
                     <button onClick={context.Mines}>Parent N-</button>

                     <button onClick={context.PlusT}>Parent T+</button>
                     <button onClick={context.MinesT}>Parent T-</button>
                  </React.Fragment>
                )}
             </MyContext.Consumer>
             <Child />
           </div>
      )
  }
}


class Child extends Component{
  render(){
    return(
           <div className="Child">
             <MyContext.Consumer>
               {(context)=>(
                  <React.Fragment>
                     <button onClick={context.Plus}>Child N+</button>
                     <button onClick={context.Mines}>Child N-</button>

                     <button onClick={context.PlusT}>Child T+</button>
                     <button onClick={context.MinesT}>Child T-</button>
                  </React.Fragment>
                )}
             </MyContext.Consumer>
           </div>
      )
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
           <MyContext.Consumer>
                 {(context)=>(
                    <React.Fragment>
                      <p>num: {context.state.num}</p>
                      <p>time: {context.state.time}</p>
                    </React.Fragment>
                  )}
           </MyContext.Consumer>
           <Parent />
        </div>
      </MyProvider>

    );
  }
}

export default App;
