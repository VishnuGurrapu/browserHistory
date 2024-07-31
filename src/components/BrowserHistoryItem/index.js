import './index.css'

const HistoryItem = props => {
  const {HistoryDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="user-card-container">
      <div className="timeTitleContainer">
        <p className="time">{timeAccessed}</p>
        <div className="titleContainer">
          <img src={logoUrl} className="webIcon" />
          <p className="title">
            {title}
            <span className="webUrl"> {domainUrl}</span>
          </p>
        </div>
      </div>

      <img
        onClick={onDelete}
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        className="deleteIcon"
      />
    </li>
  )
}
export default HistoryItem
