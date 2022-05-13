import React from "react";

class Clock extends React.Component{
      constructor(props){
          super(props);
          this.state = {
              date : new Date(),
          };
          this.timer = null;
          
      }

      componentDidMount(){
     this.timer = setInterval(()=>{
         console.log('hey');
       this.setState({date: new Date()});
}, 1000);
      }

      componentWillUnmount(){
            clearInterval(this.timer);
      }

        render(){
        return(
            <>
            <h2>Clock</h2>
            <h1>
                {this.state.date.toLocaleTimeString()}
            </h1>
            </>
        );
        }
}

export default Clock;