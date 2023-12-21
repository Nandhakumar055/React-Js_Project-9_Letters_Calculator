import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputValueCount: 0,
  }

  onChangeTextInput = event => {
    const inputValues = event.target.value
    this.setState({inputValueCount: inputValues.length})
  }

  render() {
    const {inputValueCount} = this.state

    return (
      <div className="bg-container">
        <div className="main-card-container">
          <div className="calculate-input-count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="input-label" htmlFor="letter">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-element"
              id="letter"
              onChange={this.onChangeTextInput}
              placeholder="Enter the phrase"
            />
            <p className="count-button" type="button">
              No.of letters: {inputValueCount}
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="design-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
