import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const detectedAmount = () => updateBalance(value)

  return (
    <li className="each-list">
      <button className="btn-sty" type="button" onClick={detectedAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
