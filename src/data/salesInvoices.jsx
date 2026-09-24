const salesInvoices = [
  {
    invoiceId: "INV-2026-0001",
    invoiceDate: "2026-09-01",
    customer: {
      customerId: "CUS-001",
      customerName: "Shree Industries",
      gstin: "27ABCDE1234F1Z5",
      state: "Maharashtra"
    },

    items: [
      {
        itemId: "FG-001",
        itemName: "Industrial Rubber Sheet",
        hsnCode: "4008",
        quantity: 100,
        unit: "KG",
        rate: 280,
        taxableAmount: 28000,
        gstRate: 18,
        gstAmount: 5040,
        totalAmount: 33040
      },
      {
        itemId: "FG-002",
        itemName: "Rubber Gasket",
        hsnCode: "4016",
        quantity: 200,
        unit: "PCS",
        rate: 45,
        taxableAmount: 9000,
        gstRate: 18,
        gstAmount: 1620,
        totalAmount: 10620
      }
    ],

    subtotal: 37000,
    discount: 1000,
    taxableAmount: 36000,

    cgst: 3240,
    sgst: 3240,
    igst: 0,

    roundOff: 0,
    grandTotal: 42480,

    paymentStatus: "Paid",
    paymentMode: "Bank Transfer",

    warehouse: "Main Warehouse",
    salesPerson: "Rajesh",

    status: "Confirmed",

    createdAt: "2026-09-01T10:30:00",
    updatedAt: "2026-09-01T10:30:00"
  },

  {
    invoiceId: "INV-2026-0002",
    invoiceDate: "2026-09-03",
    customer: {
      customerId: "CUS-002",
      customerName: "Global Rubber Pvt Ltd",
      gstin: "24AABCG1234K1Z2",
      state: "Gujarat"
    },

    items: [
      {
        itemId: "FG-003",
        itemName: "Rubber Conveyor Belt",
        hsnCode: "4010",
        quantity: 50,
        unit: "MTR",
        rate: 1250,
        taxableAmount: 62500,
        gstRate: 18,
        gstAmount: 11250,
        totalAmount: 73750
      }
    ],

    subtotal: 62500,
    discount: 2500,
    taxableAmount: 60000,

    cgst: 0,
    sgst: 0,
    igst: 10800,

    roundOff: 0,
    grandTotal: 70800,

    paymentStatus: "Pending",
    paymentMode: null,

    warehouse: "Main Warehouse",
    salesPerson: "Amit",

    status: "Confirmed",

    createdAt: "2026-09-03T11:15:00",
    updatedAt: "2026-09-03T11:15:00"
  },

  {
    invoiceId: "INV-2026-0003",
    invoiceDate: "2026-09-05",
    customer: {
      customerId: "CUS-003",
      customerName: "Metro Auto Components",
      gstin: "27AAACM5678P1Z8",
      state: "Maharashtra"
    },

    items: [
      {
        itemId: "FG-004",
        itemName: "Automotive Rubber Bush",
        hsnCode: "4016",
        quantity: 500,
        unit: "PCS",
        rate: 85,
        taxableAmount: 42500,
        gstRate: 18,
        gstAmount: 7650,
        totalAmount: 50150
      },
      {
        itemId: "FG-005",
        itemName: "Rubber O-Ring",
        hsnCode: "4016",
        quantity: 1000,
        unit: "PCS",
        rate: 12,
        taxableAmount: 12000,
        gstRate: 18,
        gstAmount: 2160,
        totalAmount: 14160
      }
    ],

    subtotal: 54500,
    discount: 1500,
    taxableAmount: 53000,

    cgst: 4770,
    sgst: 4770,
    igst: 0,

    roundOff: 0,
    grandTotal: 62540,

    paymentStatus: "Partial",
    paymentMode: "UPI",

    warehouse: "Finished Goods Warehouse",
    salesPerson: "Rahul",

    status: "Confirmed",

    createdAt: "2026-09-05T14:20:00",
    updatedAt: "2026-09-05T14:20:00"
  },

  {
    invoiceId: "INV-2026-0004",
    invoiceDate: "2026-09-08",
    customer: {
      customerId: "CUS-004",
      customerName: "Prime Engineering Works",
      gstin: "29AABCP9876D1Z4",
      state: "Karnataka"
    },

    items: [
      {
        itemId: "FG-006",
        itemName: "Rubber V-Belt",
        hsnCode: "4010",
        quantity: 250,
        unit: "PCS",
        rate: 320,
        taxableAmount: 80000,
        gstRate: 18,
        gstAmount: 14400,
        totalAmount: 94400
      }
    ],

    subtotal: 80000,
    discount: 5000,
    taxableAmount: 75000,

    cgst: 0,
    sgst: 0,
    igst: 13500,

    roundOff: 0,
    grandTotal: 88500,

    paymentStatus: "Paid",
    paymentMode: "NEFT",

    warehouse: "Finished Goods Warehouse",
    salesPerson: "Suresh",

    status: "Confirmed",

    createdAt: "2026-09-08T09:45:00",
    updatedAt: "2026-09-08T09:45:00"
  },

  {
    invoiceId: "INV-2026-0005",
    invoiceDate: "2026-09-10",
    customer: {
      customerId: "CUS-005",
      customerName: "National Rubber Traders",
      gstin: "27AABCN4567R1Z6",
      state: "Maharashtra"
    },

    items: [
      {
        itemId: "FG-007",
        itemName: "EPDM Rubber Sheet",
        hsnCode: "4008",
        quantity: 75,
        unit: "KG",
        rate: 420,
        taxableAmount: 31500,
        gstRate: 18,
        gstAmount: 5670,
        totalAmount: 37170
      }
    ],

    subtotal: 31500,
    discount: 500,
    taxableAmount: 31000,

    cgst: 2790,
    sgst: 2790,
    igst: 0,

    roundOff: 0,
    grandTotal: 36580,

    paymentStatus: "Pending",
    paymentMode: null,

    warehouse: "Main Warehouse",
    salesPerson: "Rajesh",

    status: "Confirmed",

    createdAt: "2026-09-10T16:10:00",
    updatedAt: "2026-09-10T16:10:00"
  }
];

export default salesInvoices;