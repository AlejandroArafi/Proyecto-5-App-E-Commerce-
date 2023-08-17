import './ProductsPage.css'

export const ProductsPage = () => {
  return (
    <>
      <h2 className='products'>Productos</h2>

      <div className="box">
        <p>Categorias</p>

        <ul className="group-li">
          <li>Vinos</li>
          <li>Vinos emsamblajes</li>
          <li>Vinos gran reserva</li>
        </ul>
      </div>

      {/* <div className="card">
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div> */}
    </>
  );
};
