import React from 'react'

function ProductList({ product }) {
  return (
    <span className="card">
      <section className="card_image">
        <img alt=".." src={product.image} />
      </section>

      <section className="card-body">
        <div className="card-product">
          <strong>product: </strong>
          <i>{product.name}</i>
        </div>
        <div className="card-product">
          <strong>product: </strong> <i>{product.price}</i>
        </div>
      </section>
    </span>
  )
}

export default ProductList
