import React, { Component } from 'react';
import { Progress, Modal, Button } from 'semantic-ui-react'


class Timer extends Component {

    state = { 
        percent: 100 
    }

    
    timer() {
        this.setState({
          percent: this.state.percent - 1
        })
        if(this.state.percent < 1) { 
          this.props.setTimerHitZero()
          clearInterval(this.intervalId);
        }
      }
      componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 100000);
      }
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }

      
   


    render() {
        
    return (
            <div>
                <Progress percent={this.state.percent} indicating />
                {/* <Modal
    trigger={<Button>Show Modal</Button>}
    header='Reminder!'
    content='Call Benjamin regarding the reports.'
    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]} */}
  
            </div>
        )
    }
}
 
export default Timer