import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createInvoice } from '../features/invoice/invoiceSlice'

function AddInvoiceModal() {
  const [productName, setproductName] = useState('')
  const [productPrice, setproductPrice] = useState('')
  const [productQuantity, setproductQuantity] = useState('')

  const dispatch = useDispatch()

  // const { user } = useSelector((state) => state.auth)

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createInvoice({ productName, productPrice, productQuantity }))
    setproductName('')
    setproductPrice('')
    setproductQuantity('')
  }
  return (
    <>
      <div className="addInvoice container d-flex rounded p-3 w-100">
        <button
          type="button "
          className="btn rounded-pill addInvoice btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add invoice
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Invoice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>{' '}
            <form className="modal_form" onSubmit={onSubmit}>
              <section className="form-container">
                {' '}
                <div className="form-group">
                  <input
                    className="w-100 p-2"
                    placeholder="Product Name"
                    type="text"
                    name="productName"
                    id="productName"
                    value={productName}
                    onChange={(e) => setproductName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control mt-4"
                    placeholder="Product price "
                    type="number"
                    name="productPrice"
                    id="productPrice "
                    value={productPrice}
                    onChange={(e) => setproductPrice(e.target.value)}
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control mt-4 mb-4"
                    placeholder="Product quantity "
                    type="number"
                    name="productQuantity"
                    id="productQuantity "
                    value={productQuantity}
                    onChange={(e) => setproductQuantity(e.target.value)}
                  ></input>
                </div>
              </section>

              <section className="button-container">
                <div className="modal-footer">
                  <button
                    className="btn btn-block text-center"
                    type="submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    {' '}
                    SUBMIT
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddInvoiceModal
