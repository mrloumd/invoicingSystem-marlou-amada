import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaRegEdit } from 'react-icons/fa'
import { updateInvoice } from '../features/invoice/invoiceSlice'

function UpdateInvoiceModa({ invoice }) {
  const dispatch = useDispatch()
  // const [updating, setUpdating] = useState(false)
  const [productName, setproductName] = useState('')
  const [productPrice, setproductPrice] = useState('')
  const [productQuantity, setproductQuantity] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(
      updateInvoice({
        ...invoice,
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
      }),
    )
    setproductName('')
    setproductPrice('')
    setproductQuantity('')
  }
  return (
    <>
      {' '}
      <button
        className="update-delete_btns"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <FaRegEdit size={25} />
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update Invoice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form className="modal_form" onSubmit={onSubmit}>
              <section className="form-container">
                {' '}
                <div className="form-group">
                  <input
                    className="w-100 p-2"
                    placeholder={invoice.productName}
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
                    placeholder={invoice.productPrice}
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
                    placeholder={invoice.productQuantity}
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

export default UpdateInvoiceModa
