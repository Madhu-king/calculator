// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }
  letters = event => {
    const textCount = event.target.value
    this.setState(prev => ({count: textCount.length}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="align">
        <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="size no"
          />

          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>

            <div className="label-container">
              <label>Enter the phrase</label>

              <input
                type="text"
                
                placeholder="Enter the phrase"
                className="inputEl"
                onChange={this.letters}
              />
            </div>

            <p className="paragraph">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="size display"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator;
