import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {currentAmount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      currentAmount: prevState.currentAmount - value,
    }))
  }

  render() {
    const {currentAmount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-main-container">
        <div className="withdraw-container">
          <div className="profile-container">
            <p className="logo-sty">
              <p className="initial-sty">{initial}</p>
            </p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="amount-text">Your Balance</p>
            <div className="amount-container">
              <p className="balance-sty">{currentAmount}</p>
              <p className="balance-text">In Rupees</p>
            </div>
          </div>
          <div className="btm-wd-container">
            <p className="wd-pera">Withdraw</p>
            <p className="wd-pera2">CHOOSE SUM (IN RUPEES)</p>
            <div>
              <ul className="denominations-list">
                {denominationsList.map(eachDenomination => (
                  <DenominationItem
                    key={eachDenomination.id}
                    denominationDetails={eachDenomination}
                    updateBalance={this.updateBalance}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
