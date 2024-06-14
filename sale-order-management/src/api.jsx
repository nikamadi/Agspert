const saleOrders = {
  active: [
    {
      id: 1,
      customer_id: "xyz",
      invoice_no: "Invoice-123",
      invoice_date: "2024-07-05",
      paid: false,
      items: [],
    },
    {
      id: 11,
      customer_id: 112,
      invoice_no: "Invoice-123",
      invoice_date: "2024-07-05",
      paid: false,
      items: [],
    },
    {
      id: 111,
      customer_id: 113,
      invoice_no: "Invoice-123",
      invoice_date: "2024-07-05",
      paid: false,
      items: [],
    },
  ],
  completed: [
    {
      id: 2,
      customer_id: 22,
      invoice_no: "Invoice-231",
      invoice_date: "2024-07-06",
      paid: true,
      items: [],
    },
    {
      id: 3,
      customer_id: 33,
      invoice_no: "Invoice-213",
      invoice_date: "2024-07-01",
      paid: true,
      items: [],
    },
  ],
};

export const getSaleOrders = async (status) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(saleOrders[status]);
    }, 1000);
  });
};
