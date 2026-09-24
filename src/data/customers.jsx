const customers = [
        {
            id: 1,
            customerCode: "CUS-001",
            companyName: "Apex Automotive Components Pvt. Ltd.",
            contactPerson: "Rahul Mehta",
            email: "rahul@apexauto.example",
            phone: "+91 98765 20001",

            customerType: "Manufacturer",
            industry: "Automotive",

            gstNumber: "27AAAAA1111A1Z5",
            panNumber: "AAAAA1111A",

            paymentTerms: "30 Days",
            creditLimit: 1500000,

            bankDetails: {
                accountHolderName: "Apex Automotive Components Pvt. Ltd.",
                bankName: "HDFC Bank",
                branchName: "Pimpri Branch",
                accountNumber: "000000001001",
                accountType: "Current",
                ifscCode: "HDFC0001001",
                micrCode: "000001001"
            },

            billingAddress: {
                street: "MIDC Industrial Area",
                city: "Pune",
                state: "Maharashtra",
                pincode: "411019",
                country: "India"
            },

            shippingAddress: {
                street: "Automotive Industrial Zone",
                city: "Pune",
                state: "Maharashtra",
                pincode: "411026",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 2,
            customerCode: "CUS-002",
            companyName: "Maharashtra Engineering Works",
            contactPerson: "Sanjay Patil",
            email: "sanjay@mew.example",
            phone: "+91 98765 20002",

            customerType: "Manufacturer",
            industry: "Engineering",

            gstNumber: "27BBBBB2222B1Z5",
            panNumber: "BBBBB2222B",

            paymentTerms: "45 Days",
            creditLimit: 800000,

            bankDetails: {
                accountHolderName: "Maharashtra Engineering Works",
                bankName: "State Bank of India",
                branchName: "Bhosari Branch",
                accountNumber: "000000001002",
                accountType: "Current",
                ifscCode: "SBIN0001002",
                micrCode: "000001002"
            },

            billingAddress: {
                street: "Bhosari Industrial Estate",
                city: "Pune",
                state: "Maharashtra",
                pincode: "411026",
                country: "India"
            },

            shippingAddress: {
                street: "Plot No. 42, MIDC",
                city: "Pune",
                state: "Maharashtra",
                pincode: "411026",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 3,
            customerCode: "CUS-003",
            companyName: "Shakti Pumps & Motors Ltd.",
            contactPerson: "Amit Joshi",
            email: "amit@shaktipumps.example",
            phone: "+91 98765 20003",

            customerType: "Manufacturer",
            industry: "Industrial Equipment",

            gstNumber: "27CCCCC3333C1Z5",
            panNumber: "CCCCC3333C",

            paymentTerms: "30 Days",
            creditLimit: 1000000,

            bankDetails: {
                accountHolderName: "Shakti Pumps & Motors Ltd.",
                bankName: "ICICI Bank",
                branchName: "Nashik Industrial Branch",
                accountNumber: "000000001003",
                accountType: "Current",
                ifscCode: "ICIC0001003",
                micrCode: "000001003"
            },

            billingAddress: {
                street: "Satpur MIDC",
                city: "Nashik",
                state: "Maharashtra",
                pincode: "422007",
                country: "India"
            },

            shippingAddress: {
                street: "Plot No. 18, Satpur MIDC",
                city: "Nashik",
                state: "Maharashtra",
                pincode: "422007",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 4,
            customerCode: "CUS-004",
            companyName: "Western Industrial Equipment",
            contactPerson: "Vikas Sharma",
            email: "vikas@westernindustrial.example",
            phone: "+91 98765 20004",

            customerType: "Distributor",
            industry: "Industrial Equipment",

            gstNumber: "27DDDDD4444D1Z5",
            panNumber: "DDDDD4444D",

            paymentTerms: "60 Days",
            creditLimit: 1200000,

            bankDetails: {
                accountHolderName: "Western Industrial Equipment",
                bankName: "Axis Bank",
                branchName: "Andheri Branch",
                accountNumber: "000000001004",
                accountType: "Current",
                ifscCode: "UTIB0001004",
                micrCode: "000001004"
            },

            billingAddress: {
                street: "Andheri Industrial Estate",
                city: "Mumbai",
                state: "Maharashtra",
                pincode: "400093",
                country: "India"
            },

            shippingAddress: {
                street: "Warehouse No. 12",
                city: "Mumbai",
                state: "Maharashtra",
                pincode: "400093",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 5,
            customerCode: "CUS-005",
            companyName: "Precision Auto Parts India",
            contactPerson: "Neha Kulkarni",
            email: "neha@precisionauto.example",
            phone: "+91 98765 20005",

            customerType: "Manufacturer",
            industry: "Automotive",

            gstNumber: "27EEEEE5555E1Z5",
            panNumber: "EEEEE5555E",

            paymentTerms: "45 Days",
            creditLimit: 2000000,

            bankDetails: {
                accountHolderName: "Precision Auto Parts India",
                bankName: "Kotak Mahindra Bank",
                branchName: "Chakan Branch",
                accountNumber: "000000001005",
                accountType: "Current",
                ifscCode: "KKBK0001005",
                micrCode: "000001005"
            },

            billingAddress: {
                street: "Chakan Industrial Area",
                city: "Pune",
                state: "Maharashtra",
                pincode: "410501",
                country: "India"
            },

            shippingAddress: {
                street: "Phase II, Chakan MIDC",
                city: "Pune",
                state: "Maharashtra",
                pincode: "410501",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 6,
            customerCode: "CUS-006",
            companyName: "National Conveyor Systems",
            contactPerson: "Prakash Verma",
            email: "prakash@nationalconveyor.example",
            phone: "+91 98765 20006",

            customerType: "Manufacturer",
            industry: "Material Handling",

            gstNumber: "07FFFFFF6666F1Z5",
            panNumber: "FFFFFF6666F",

            paymentTerms: "30 Days",
            creditLimit: 900000,

            bankDetails: {
                accountHolderName: "National Conveyor Systems",
                bankName: "Punjab National Bank",
                branchName: "Okhla Branch",
                accountNumber: "000000001006",
                accountType: "Current",
                ifscCode: "PUNB0001006",
                micrCode: "000001006"
            },

            billingAddress: {
                street: "Okhla Industrial Area",
                city: "New Delhi",
                state: "Delhi",
                pincode: "110020",
                country: "India"
            },

            shippingAddress: {
                street: "Industrial Estate, Phase II",
                city: "New Delhi",
                state: "Delhi",
                pincode: "110020",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 7,
            customerCode: "CUS-007",
            companyName: "South India Machinery Pvt. Ltd.",
            contactPerson: "Arun Kumar",
            email: "arun@southmachinery.example",
            phone: "+91 98765 20007",

            customerType: "Manufacturer",
            industry: "Heavy Machinery",

            gstNumber: "29GGGGG7777G1Z5",
            panNumber: "GGGGG7777G",

            paymentTerms: "60 Days",
            creditLimit: 1800000,

            bankDetails: {
                accountHolderName: "South India Machinery Pvt. Ltd.",
                bankName: "Canara Bank",
                branchName: "Peenya Branch",
                accountNumber: "000000001007",
                accountType: "Current",
                ifscCode: "CNRB0001007",
                micrCode: "000001007"
            },

            billingAddress: {
                street: "Peenya Industrial Area",
                city: "Bengaluru",
                state: "Karnataka",
                pincode: "560058",
                country: "India"
            },

            shippingAddress: {
                street: "Peenya Industrial Area Phase II",
                city: "Bengaluru",
                state: "Karnataka",
                pincode: "560058",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 8,
            customerCode: "CUS-008",
            companyName: "Gujarat Chemical Industries",
            contactPerson: "Rakesh Shah",
            email: "rakesh@gujaratchem.example",
            phone: "+91 98765 20008",

            customerType: "Manufacturer",
            industry: "Chemical",

            gstNumber: "24HHHHH8888H1Z5",
            panNumber: "HHHHH8888H",

            paymentTerms: "30 Days",
            creditLimit: 700000,

            bankDetails: {
                accountHolderName: "Gujarat Chemical Industries",
                bankName: "Bank of Baroda",
                branchName: "Ahmedabad Industrial Branch",
                accountNumber: "000000001008",
                accountType: "Current",
                ifscCode: "BARB0001008",
                micrCode: "000001008"
            },

            billingAddress: {
                street: "Vatva Industrial Estate",
                city: "Ahmedabad",
                state: "Gujarat",
                pincode: "382445",
                country: "India"
            },

            shippingAddress: {
                street: "Vatva GIDC",
                city: "Ahmedabad",
                state: "Gujarat",
                pincode: "382445",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 9,
            customerCode: "CUS-009",
            companyName: "Reliable Rubber Distributors",
            contactPerson: "Manoj Agarwal",
            email: "manoj@reliablerubber.example",
            phone: "+91 98765 20009",

            customerType: "Distributor",
            industry: "Rubber Products",

            gstNumber: "27IIIII9999I1Z5",
            panNumber: "IIIII9999I",

            paymentTerms: "30 Days",
            creditLimit: 500000,

            bankDetails: {
                accountHolderName: "Reliable Rubber Distributors",
                bankName: "Union Bank of India",
                branchName: "Pimpri Branch",
                accountNumber: "000000001009",
                accountType: "Current",
                ifscCode: "UBIN0001009",
                micrCode: "000001009"
            },

            billingAddress: {
                street: "Pimpri Industrial Area",
                city: "Pune",
                state: "Maharashtra",
                pincode: "411018",
                country: "India"
            },

            shippingAddress: {
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
            customerCode: "CUS-010",
            companyName: "Eastern Engineering Corporation",
            contactPerson: "Sourav Das",
            email: "sourav@easternengineering.example",
            phone: "+91 98765 20010",

            customerType: "Manufacturer",
            industry: "Engineering",

            gstNumber: "19JJJJJ0000J1Z5",
            panNumber: "JJJJJ0000J",

            paymentTerms: "45 Days",
            creditLimit: 1100000,

            bankDetails: {
                accountHolderName: "Eastern Engineering Corporation",
                bankName: "ICICI Bank",
                branchName: "Kolkata Industrial Branch",
                accountNumber: "000000001010",
                accountType: "Current",
                ifscCode: "ICIC0001010",
                micrCode: "000001010"
            },

            billingAddress: {
                street: "Topsia Industrial Area",
                city: "Kolkata",
                state: "West Bengal",
                pincode: "700039",
                country: "India"
            },

            shippingAddress: {
                street: "Topsia Industrial Area",
                city: "Kolkata",
                state: "West Bengal",
                pincode: "700039",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 11,
            customerCode: "CUS-011",
            companyName: "Bharat Agricultural Equipment",
            contactPerson: "Vijay Singh",
            email: "vijay@bharatagri.example",
            phone: "+91 98765 20011",

            customerType: "Manufacturer",
            industry: "Agriculture Equipment",

            gstNumber: "09KKKKK1111K1Z5",
            panNumber: "KKKKK1111K",

            paymentTerms: "60 Days",
            creditLimit: 1300000,

            bankDetails: {
                accountHolderName: "Bharat Agricultural Equipment",
                bankName: "State Bank of India",
                branchName: "Kanpur Industrial Branch",
                accountNumber: "000000001011",
                accountType: "Current",
                ifscCode: "SBIN0001011",
                micrCode: "000001011"
            },

            billingAddress: {
                street: "Panki Industrial Area",
                city: "Kanpur",
                state: "Uttar Pradesh",
                pincode: "208020",
                country: "India"
            },

            shippingAddress: {
                street: "Panki Industrial Area",
                city: "Kanpur",
                state: "Uttar Pradesh",
                pincode: "208020",
                country: "India"
            },

            status: "Active"
        },

        {
            id: 12,
            customerCode: "CUS-012",
            companyName: "Global Industrial Products Ltd.",
            contactPerson: "Daniel Thomas",
            email: "daniel@globalindustrial.example",
            phone: "+91 98765 20012",

            customerType: "Exporter",
            industry: "Industrial Products",

            gstNumber: "29LLLLL2222L1Z5",
            panNumber: "LLLLL2222L",

            paymentTerms: "45 Days",
            creditLimit: 2500000,

            bankDetails: {
                accountHolderName: "Global Industrial Products Ltd.",
                bankName: "Axis Bank",
                branchName: "Bengaluru Industrial Branch",
                accountNumber: "000000001012",
                accountType: "Current",
                ifscCode: "UTIB0001012",
                micrCode: "000001012"
            },

            billingAddress: {
                street: "Electronic City",
                city: "Bengaluru",
                state: "Karnataka",
                pincode: "560100",
                country: "India"
            },

            shippingAddress: {
                street: "Electronic City Phase II",
                city: "Bengaluru",
                state: "Karnataka",
                pincode: "560100",
                country: "India"
            },

            status: "Active"
        }
    ];

    export default customers;