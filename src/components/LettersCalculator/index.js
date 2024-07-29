// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', length: 0}

  lettersCount = event => {
    const inputValue = event.target.value
    this.setState({
      searchInput: inputValue,
      length: inputValue.length,
    })
  }

  render() {
    const {searchInput, length} = this.state
    return (
      <div className="bg-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="details-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input">Enter the phrase</label>
          <input
            id="input"
            value={searchInput}
            type="text"
            placeholder="Enter the Phrase"
            className="input"
            onChange={this.lettersCount}
          />
          <p className="letters">No.of letters: {length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
