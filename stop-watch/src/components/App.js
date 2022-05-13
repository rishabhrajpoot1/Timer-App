import React from "react";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends React.Component{
    constructor(props){
         super(props);
         this.state = {
        currentVisible : 'clock',
         }
    }

    handleUI = (value)=>{
    switch(value) {
        case 'clock':
        return   <Clock />;
        case 'countdown':
        return <Countdown />;
        case 'stopwatch':
        return <Stopwatch />
    }
    }

    handleTimer =(value)=>{
        this.setState({
            currentVisible: value,
        });
    }
    
   render(){
       return (
            <>
            <div className='main flex justify-center align-center'>
                {this.handleUI(this.state.currentVisible)}
            </div>
            <div className='buttons'>
                <button className={this.state.currentVisible === 'clock' ? 'btn btn-secondary' : 'btn btn-primary'} onClick={()=>this.handleTimer('clock')}>Clock</button>
                <button className={this.state.currentVisible === 'stopwatch' ? 'btn btn-secondary' : 'btn btn-primary'} onClick={()=>this.handleTimer('stopwatch')}>Stopwatch</button>
                <button className={this.state.currentVisible === 'countdown' ? 'btn btn-secondary' : 'btn btn-primary'} onClick={()=>this.handleTimer('countdown')}>Countdown</button>
            </div>

           </>
       );
   }
}

export default App;