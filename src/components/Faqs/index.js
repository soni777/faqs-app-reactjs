import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachitem => (
              <FaqItem key={eachitem.id} faqDetails={eachitem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
