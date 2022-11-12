import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="card">
        <div className="question">
          <h1>{questionText}</h1>
          <button className="btn" type="button" onClick={this.onToggleIsActive}>
            <img src={image} alt={altText} />
          </button>
        </div>
        {isActive && (
          <>
            <hr />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
