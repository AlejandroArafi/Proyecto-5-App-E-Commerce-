import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Search = () => {

  const [query, setQuery] = useState('')
  const navegate = useNavigate()

  const onChange = (e)=>{
    setQuery(e.target.value)
  }
  const onSubmit = (e)=>{
    e.preventDefault()
    navegate(`results?query=${query}`)
    setQuery('')
  } 

  return (
    <div className='cajaSearch'>
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form onSubmit={onSubmit} className="d-flex">
        <input onChange={onChange} value={query} className="form-control me-2" type="search" placeholder="Buscar  " aria-label="Search "/>
        <button className="btn btn-outline-success" type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#444349",}} /></button>
      </form>
    </div>
  </nav>
  </div>
  )
}
