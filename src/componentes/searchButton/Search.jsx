import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export const Search = () => {
  return (
    <div className='cajaSearch'>
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search  " aria-label="Search "/>
        <button className="btn btn-outline-success" type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#444349",}} /></button>
      </form>
    </div>
  </nav>
  </div>
  )
}
