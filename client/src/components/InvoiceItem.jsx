import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'
import { deleteInvoice } from '../features/invoice/invoiceSlice'
import UpdateInvoiceModal from './UpdateInvoiceModal'

function InvoiceItem({ invoice }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="card">
      {' '}
      <section className="ms-auto">
        <UpdateInvoiceModal key={invoice._id} invoice={invoice} />
        <button
          className="update-delete_btns"
          onClick={() => dispatch(deleteInvoice(invoice._id))}
        >
          <FaRegTrashAlt size={25} />
        </button>
      </section>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Customer name</th>
            <th scope="col">Product name</th>
            <th scope="col">Product price</th>
            <th scope="col">Product quantity</th>
            <th scope="col">Invoice id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {user.firstName} {user.lastName}
            </td>
            <td>{invoice.productName}</td>
            <td>{invoice.productPrice}</td>
            <td>{invoice.productQuantity}</td>
            <td>{invoice._id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceItem
