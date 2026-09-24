const vendors = [
    {
        id: 1,
        vendorCode: "VEN-001",
        companyName: "Shree Rubber Chemicals Pvt. Ltd.",
        contactPerson: "Rajesh Patil",
        email: "rajesh@shreerubber.example",
        phone: "+91 98765 10001",

        category: "Raw Material",
        materials: ["Natural Rubber", "Synthetic Rubber"],

        gstNumber: "27AAAAA0000A1Z5",
        panNumber: "AAAAA0000A",

        paymentTerms: "30 Days",
        creditLimit: 500000,

        bankDetails: {
            accountHolderName: "Shree Rubber Chemicals Pvt. Ltd.",
            bankName: "State Bank of India",
            branchName: "MIDC Nashik Branch",
            accountNumber: "000000000001",
            accountType: "Current",
            ifscCode: "SBIN0000001",
            micrCode: "000000001"
        },

        address: {
            street: "MIDC Industrial Area",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422007",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 2,
        vendorCode: "VEN-002",
        companyName: "Bharat Rubber Solutions",
        contactPerson: "Amit Sharma",
        email: "amit@bharatrubber.example",
        phone: "+91 98765 10002",

        category: "Raw Material",
        materials: ["EPDM Rubber", "NBR Rubber"],

        gstNumber: "27BBBBB0000B1Z5",
        panNumber: "BBBBB0000B",

        paymentTerms: "45 Days",
        creditLimit: 750000,

        bankDetails: {
            accountHolderName: "Bharat Rubber Solutions",
            bankName: "HDFC Bank",
            branchName: "Bhosari Branch",
            accountNumber: "000000000002",
            accountType: "Current",
            ifscCode: "HDFC0000002",
            micrCode: "000000002"
        },

        address: {
            street: "Bhosari Industrial Estate",
            city: "Pune",
            state: "Maharashtra",
            pincode: "411026",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 3,
        vendorCode: "VEN-003",
        companyName: "Western Carbon Industries",
        contactPerson: "Suresh Kulkarni",
        email: "suresh@westerncarbon.example",
        phone: "+91 98765 10003",

        category: "Chemical",
        materials: ["Carbon Black", "Silica"],

        gstNumber: "27CCCCC0000C1Z5",
        panNumber: "CCCCC0000C",

        paymentTerms: "30 Days",
        creditLimit: 400000,

        bankDetails: {
            accountHolderName: "Western Carbon Industries",
            bankName: "ICICI Bank",
            branchName: "Satpur Branch",
            accountNumber: "000000000003",
            accountType: "Current",
            ifscCode: "ICIC0000003",
            micrCode: "000000003"
        },

        address: {
            street: "Satpur MIDC",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422007",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 4,
        vendorCode: "VEN-004",
        companyName: "Industrial Chemical Traders",
        contactPerson: "Vikram Mehta",
        email: "vikram@industrialchem.example",
        phone: "+91 98765 10004",

        category: "Chemical",
        materials: [
            "Zinc Oxide",
            "Sulfur",
            "Accelerators",
            "Antioxidants"
        ],

        gstNumber: "27DDDDD0000D1Z5",
        panNumber: "DDDDD0000D",

        paymentTerms: "30 Days",
        creditLimit: 600000,

        bankDetails: {
            accountHolderName: "Industrial Chemical Traders",
            bankName: "Axis Bank",
            branchName: "Taloja Branch",
            accountNumber: "000000000004",
            accountType: "Current",
            ifscCode: "UTIB0000004",
            micrCode: "000000004"
        },

        address: {
            street: "Taloja Industrial Area",
            city: "Navi Mumbai",
            state: "Maharashtra",
            pincode: "410208",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 5,
        vendorCode: "VEN-005",
        companyName: "Precision Rubber Compounds",
        contactPerson: "Neha Joshi",
        email: "neha@precisionrubber.example",
        phone: "+91 98765 10005",

        category: "Rubber Compound",
        materials: [
            "NBR Compound",
            "EPDM Compound",
            "SBR Compound"
        ],

        gstNumber: "27EEEEE0000E1Z5",
        panNumber: "EEEEE0000E",

        paymentTerms: "60 Days",
        creditLimit: 1000000,

        bankDetails: {
            accountHolderName: "Precision Rubber Compounds",
            bankName: "Kotak Mahindra Bank",
            branchName: "Chakan Branch",
            accountNumber: "000000000005",
            accountType: "Current",
            ifscCode: "KKBK0000005",
            micrCode: "000000005"
        },

        address: {
            street: "Chakan Industrial Area",
            city: "Pune",
            state: "Maharashtra",
            pincode: "410501",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 6,
        vendorCode: "VEN-006",
        companyName: "Maharashtra Packaging Solutions",
        contactPerson: "Prakash Jadhav",
        email: "prakash@mahapack.example",
        phone: "+91 98765 10006",

        category: "Packaging",
        materials: [
            "Cartons",
            "Plastic Bags",
            "Labels",
            "Packaging Tape"
        ],

        gstNumber: "27FFFFF0000F1Z5",
        panNumber: "FFFFF0000F",

        paymentTerms: "30 Days",
        creditLimit: 250000,

        bankDetails: {
            accountHolderName: "Maharashtra Packaging Solutions",
            bankName: "Bank of Maharashtra",
            branchName: "Bhosari Branch",
            accountNumber: "000000000006",
            accountType: "Current",
            ifscCode: "MAHB0000006",
            micrCode: "000000006"
        },

        address: {
            street: "Bhosari MIDC",
            city: "Pune",
            state: "Maharashtra",
            pincode: "411026",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 7,
        vendorCode: "VEN-007",
        companyName: "Alpha Engineering Spares",
        contactPerson: "Manoj Verma",
        email: "manoj@alphaeng.example",
        phone: "+91 98765 10007",

        category: "Machine Spare Parts",
        materials: [
            "Bearings",
            "Belts",
            "Gears",
            "Seals"
        ],

        gstNumber: "27GGGGG0000G1Z5",
        panNumber: "GGGGG0000G",

        paymentTerms: "30 Days",
        creditLimit: 300000,

        bankDetails: {
            accountHolderName: "Alpha Engineering Spares",
            bankName: "Punjab National Bank",
            branchName: "Waluj Branch",
            accountNumber: "000000000007",
            accountType: "Current",
            ifscCode: "PUNB0000007",
            micrCode: "000000007"
        },

        address: {
            street: "Waluj Industrial Area",
            city: "Aurangabad",
            state: "Maharashtra",
            pincode: "431136",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 8,
        vendorCode: "VEN-008",
        companyName: "PowerTech Electricals",
        contactPerson: "Rohit Deshmukh",
        email: "rohit@powertech.example",
        phone: "+91 98765 10008",

        category: "Electrical",
        materials: [
            "Motors",
            "Cables",
            "Switches",
            "Electrical Components"
        ],

        gstNumber: "27HHHHH0000H1Z5",
        panNumber: "HHHHH0000H",

        paymentTerms: "45 Days",
        creditLimit: 350000,

        bankDetails: {
            accountHolderName: "PowerTech Electricals",
            bankName: "Canara Bank",
            branchName: "Ambad Branch",
            accountNumber: "000000000008",
            accountType: "Current",
            ifscCode: "CNRB0000008",
            micrCode: "000000008"
        },

        address: {
            street: "MIDC Ambad",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422010",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 9,
        vendorCode: "VEN-009",
        companyName: "SafeGuard Industrial Supplies",
        contactPerson: "Anil Gupta",
        email: "anil@safeguard.example",
        phone: "+91 98765 10009",

        category: "Safety Equipment",
        materials: [
            "Safety Gloves",
            "Safety Shoes",
            "Helmets",
            "Safety Goggles"
        ],

        gstNumber: "27IIIII0000I1Z5",
        panNumber: "IIIII0000I",

        paymentTerms: "30 Days",
        creditLimit: 150000,

        bankDetails: {
            accountHolderName: "SafeGuard Industrial Supplies",
            bankName: "Union Bank of India",
            branchName: "Pimpri Branch",
            accountNumber: "000000000009",
            accountType: "Current",
            ifscCode: "UBIN0000009",
            micrCode: "000000009"
        },

        address: {
            street: "Pimpri Industrial Area",
            city: "Pune",
            state: "Maharashtra",
            pincode: "411018",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 10,
        vendorCode: "VEN-010",
        companyName: "Industrial Lubricants India",
        contactPerson: "Sanjay More",
        email: "sanjay@indlub.example",
        phone: "+91 98765 10010",

        category: "Lubricants",
        materials: [
            "Machine Oil",
            "Hydraulic Oil",
            "Grease",
            "Gear Oil"
        ],

        gstNumber: "27JJJJJ0000J1Z5",
        panNumber: "JJJJJ0000J",

        paymentTerms: "30 Days",
        creditLimit: 200000,

        bankDetails: {
            accountHolderName: "Industrial Lubricants India",
            bankName: "IndusInd Bank",
            branchName: "Sinnar Branch",
            accountNumber: "000000000010",
            accountType: "Current",
            ifscCode: "INDB0000010",
            micrCode: "000000010"
        },

        address: {
            street: "Sinnar Industrial Area",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422103",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 11,
        vendorCode: "VEN-011",
        companyName: "Global Synthetic Rubber Ltd.",
        contactPerson: "Arun Nair",
        email: "arun@globalsynthetic.example",
        phone: "+91 98765 10011",

        category: "Raw Material",
        materials: [
            "Synthetic Rubber",
            "Butyl Rubber"
        ],

        gstNumber: "29KKKKK0000K1Z5",
        panNumber: "KKKKK0000K",

        paymentTerms: "60 Days",
        creditLimit: 1200000,

        bankDetails: {
            accountHolderName: "Global Synthetic Rubber Ltd.",
            bankName: "Bank of Baroda",
            branchName: "Peenya Branch",
            accountNumber: "000000000011",
            accountType: "Current",
            ifscCode: "BARB0000011",
            micrCode: "000000011"
        },

        address: {
            street: "Peenya Industrial Area",
            city: "Bengaluru",
            state: "Karnataka",
            pincode: "560058",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 12,
        vendorCode: "VEN-012",
        companyName: "Metro Transport Services",
        contactPerson: "Deepak Singh",
        email: "deepak@metrotransport.example",
        phone: "+91 98765 10012",

        category: "Logistics",
        materials: [],

        gstNumber: "27LLLLL0000L1Z5",
        panNumber: "LLLLL0000L",

        paymentTerms: "15 Days",
        creditLimit: 100000,

        bankDetails: {
            accountHolderName: "Metro Transport Services",
            bankName: "ICICI Bank",
            branchName: "Transport Nagar Branch",
            accountNumber: "000000000012",
            accountType: "Current",
            ifscCode: "ICIC0000012",
            micrCode: "000000012"
        },

        address: {
            street: "Transport Nagar",
            city: "Pune",
            state: "Maharashtra",
            pincode: "411037",
            country: "India"
        },

        status: "Active"
    }
];

export default vendors;