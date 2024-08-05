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
          <img src={logoUrl} alt="domain logo" className="webIcon" />
          <div className="pContainer">
            <p className="title">{title}</p>
            <p className="webUrl"> {domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={onDelete} data-testid="delete">
        {' '}
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="deleteIcon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
