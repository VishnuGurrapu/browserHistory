import './App.css'
import HistoryItem from './components/BrowserHistoryItem'
import {Component} from 'react'

//These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    HistoryList: initialHistoryList,
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  onDeleteItem = id => {
    const {HistoryList} = this.state

    const filteredUsersData = HistoryList.filter(each => each.id !== id)
    this.setState({
      HistoryList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, HistoryList} = this.state

    const searchResults = HistoryList.filter(eachitem =>
      eachitem.title.includes(searchInput),
    )
    if (searchResults.lenght === 0) {
      return (
        <div className='app-container'>
          <div className='header'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png'
              className='historyLogo'
            />
            <div className='inputContainer'>
              <div className='iconContainer'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/search-img.png'
                  className='icon'
                />
              </div>
              <input
                className='Searchinput'
                placeholder='Search History'
                type='search'
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className='list-container'>
            <p className='noHistory'>There is no history to show</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className='app-container'>
          <div className='header'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png'
              className='historyLogo'
            />
            <div className='inputContainer'>
              <div className='iconContainer'>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/search-img.png'
                  className='icon'
                  alt='search'
                />
              </div>
              <input
                className='Searchinput'
                placeholder='Search History'
                type='search'
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>

          <div className='list-container'>
            <ul className='list'>
              {searchResults.map(each => (
                <HistoryItem
                  HistoryDetails={each}
                  onDeleteItem={this.onDeleteItem}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default App
