import './HomePage.css'
export const HomePage = () => {
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  return (
      <>
  
      {/* <h2  className='title'>Di Santi</h2>
      <p>Pasión por el vino</p> */}
      <img className="imgMain" src={'https://e0.pxfuel.com/wallpapers/235/847/desktop-wallpaper-wine-glass-stock-food-and-wine.jpg'} alt="" />
      
      </>
      )
}
