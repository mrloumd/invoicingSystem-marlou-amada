import axios from "axios";

const API_URL = "/api/invoices/";

// Create new invoice
const createInvoice = async (inovoiceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, inovoiceData, config);

  return response.data;
};

// Get user inovoices
const getInvoices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user inovoice
const deleteInvoice = async (inovoiceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + inovoiceId, config);

  return response.data;
};

// Update inovoice
const updateInvoice = async (inovoiceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + inovoiceData._id,
    inovoiceData,
    config
  );

  return response.data;
};

const invoiceService = {
  createInvoice,
  getInvoices,
  deleteInvoice,
  updateInvoice,
};

export default invoiceService;
