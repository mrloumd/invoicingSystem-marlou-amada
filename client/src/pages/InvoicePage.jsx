import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import InvoiceItem from '../components/InvoiceItem'
import { getInvoices } from '../features/invoice/invoiceSlice'
import { reset } from '../features/auth/authSlice'
// import AddInvoiceModal from '../components/AddInvoiceModal'
import Spinner from '../components/Spinner'

function InvoicePage() {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { invoices, isLoading, isError, message } = useSelector(
    (state) => state.invoices,
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getInvoices())

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      {invoices.length > 0 ? (
        <div className="invoice-card">
          {invoices.map((invoice) => (
            <InvoiceItem key={invoice._id} invoice={invoice} />
          ))}
        </div>
      ) : (
        <h3 className="d-flex justify-content-center mt-5">Buy product</h3>
      )}
    </div>
  )
}

export default InvoicePage
