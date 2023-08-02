// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => {
      console.log(`previous state value ${previousState.count}`)
      return {count: previousState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            The button has been clicked <br />
            <span className="count"> {count}</span> times
          </h1>
          <p className="description">Click the button to increase the count</p>
          <button className="button" onClick={this.onIncrement}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
