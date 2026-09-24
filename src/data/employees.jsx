const employees = [
    {
        id: 1,
        employeeCode: "EMP-001",

        personalInfo: {
            firstName: "Rajesh",
            lastName: "Patil",
            gender: "Male",
            dateOfBirth: "1985-06-15",
            email: "rajesh.patil@example.com",
            phone: "+91 90000 10001"
        },

        employment: {
            designation: "General Manager",
            department: "HR",
            employmentType: "Full Time",
            joiningDate: "2018-04-02",
            reportingManager: null,
            workLocation: "Remote",
            status: "Active"
        },

        salary: {
            basicSalary: 85000,
            allowances: 25000,
            deductions: 5000,
            netSalary: 105000,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Rajesh Patil",
            bankName: "HDFC Bank",
            branchName: "Nashik Branch",
            accountNumber: "000000100001",
            accountType: "Salary",
            ifscCode: "HDFC0001001"
        },

        identification: {
            panNumber: "AAAAA0001A",
            employeeId: "EMPID0001"
        },

        emergencyContact: {
            name: "Priya Patil",
            relationship: "Spouse",
            phone: "+91 90000 11001"
        },

        address: {
            street: "College Road",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422005",
            country: "India"
        }
    },

    {
        id: 2,
        employeeCode: "EMP-002",

        personalInfo: {
            firstName: "Amit",
            lastName: "Sharma",
            gender: "Male",
            dateOfBirth: "1990-02-18",
            email: "amit.sharma@example.com",
            phone: "+91 90000 10002"
        },

        employment: {
            designation: "Production Manager",
            department: "Production",
            employmentType: "Full Time",
            joiningDate: "2020-06-15",
            reportingManager: "EMP-001",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 65000,
            allowances: 15000,
            deductions: 4000,
            netSalary: 76000,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Amit Sharma",
            bankName: "State Bank of India",
            branchName: "Satpur Branch",
            accountNumber: "000000100002",
            accountType: "Salary",
            ifscCode: "SBIN0001002"
        },

        identification: {
            panNumber: "BBBBB0002B",
            employeeId: "EMPID0002"
        },

        emergencyContact: {
            name: "Neha Sharma",
            relationship: "Spouse",
            phone: "+91 90000 11002"
        },

        address: {
            street: "Gangapur Road",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422013",
            country: "India"
        }
    },

    {
        id: 3,
        employeeCode: "EMP-003",

        personalInfo: {
            firstName: "Neha",
            lastName: "Kulkarni",
            gender: "Female",
            dateOfBirth: "1992-09-10",
            email: "neha.kulkarni@example.com",
            phone: "+91 90000 10003"
        },

        employment: {
            designation: "Quality Control Manager",
            department: "Quality Control",
            employmentType: "Full Time",
            joiningDate: "2021-01-11",
            reportingManager: "EMP-001",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 60000,
            allowances: 14000,
            deductions: 3500,
            netSalary: 70500,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Neha Kulkarni",
            bankName: "ICICI Bank",
            branchName: "Nashik Branch",
            accountNumber: "000000100003",
            accountType: "Salary",
            ifscCode: "ICIC0001003"
        },

        identification: {
            panNumber: "CCCCC0003C",
            employeeId: "EMPID0003"
        },

        emergencyContact: {
            name: "Suresh Kulkarni",
            relationship: "Father",
            phone: "+91 90000 11003"
        },

        address: {
            street: "Indira Nagar",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422009",
            country: "India"
        }
    },

    {
        id: 4,
        employeeCode: "EMP-004",

        personalInfo: {
            firstName: "Suresh",
            lastName: "Jadhav",
            gender: "Male",
            dateOfBirth: "1988-12-05",
            email: "suresh.jadhav@example.com",
            phone: "+91 90000 10004"
        },

        employment: {
            designation: "Maintenance Manager",
            department: "Maintenance",
            employmentType: "Full Time",
            joiningDate: "2019-08-01",
            reportingManager: "EMP-001",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 55000,
            allowances: 12000,
            deductions: 3000,
            netSalary: 64000,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Suresh Jadhav",
            bankName: "Bank of Maharashtra",
            branchName: "Ambad Branch",
            accountNumber: "000000100004",
            accountType: "Salary",
            ifscCode: "MAHB0001004"
        },

        identification: {
            panNumber: "DDDDD0004D",
            employeeId: "EMPID0004"
        },

        emergencyContact: {
            name: "Sunita Jadhav",
            relationship: "Spouse",
            phone: "+91 90000 11004"
        },

        address: {
            street: "CIDCO",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422009",
            country: "India"
        }
    },

    {
        id: 5,
        employeeCode: "EMP-005",

        personalInfo: {
            firstName: "Vikas",
            lastName: "Shinde",
            gender: "Male",
            dateOfBirth: "1994-03-22",
            email: "vikas.shinde@example.com",
            phone: "+91 90000 10005"
        },

        employment: {
            designation: "Production Supervisor",
            department: "Production",
            employmentType: "Full Time",
            joiningDate: "2022-02-14",
            reportingManager: "EMP-002",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 35000,
            allowances: 8000,
            deductions: 2000,
            netSalary: 41000,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Vikas Shinde",
            bankName: "Axis Bank",
            branchName: "Satpur Branch",
            accountNumber: "000000100005",
            accountType: "Salary",
            ifscCode: "UTIB0001005"
        },

        identification: {
            panNumber: "EEEEE0005E",
            employeeId: "EMPID0005"
        },

        emergencyContact: {
            name: "Meena Shinde",
            relationship: "Mother",
            phone: "+91 90000 11005"
        },

        address: {
            street: "Panchavati",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422003",
            country: "India"
        }
    },

    {
        id: 6,
        employeeCode: "EMP-006",

        personalInfo: {
            firstName: "Priya",
            lastName: "Deshmukh",
            gender: "Female",
            dateOfBirth: "1995-07-19",
            email: "priya.deshmukh@example.com",
            phone: "+91 90000 10006"
        },

        employment: {
            designation: "HR Executive",
            department: "Human Resources",
            employmentType: "Full Time",
            joiningDate: "2022-05-09",
            reportingManager: "EMP-001",
            workLocation: "Head Office",
            status: "Active"
        },

        salary: {
            basicSalary: 40000,
            allowances: 9000,
            deductions: 2500,
            netSalary: 46500,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Priya Deshmukh",
            bankName: "Kotak Mahindra Bank",
            branchName: "Nashik Branch",
            accountNumber: "000000100006",
            accountType: "Salary",
            ifscCode: "KKBK0001006"
        },

        identification: {
            panNumber: "FFFFF0006F",
            employeeId: "EMPID0006"
        },

        emergencyContact: {
            name: "Rahul Deshmukh",
            relationship: "Brother",
            phone: "+91 90000 11006"
        },

        address: {
            street: "Mahatma Nagar",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422007",
            country: "India"
        }
    },

    {
        id: 7,
        employeeCode: "EMP-007",

        personalInfo: {
            firstName: "Manoj",
            lastName: "Verma",
            gender: "Male",
            dateOfBirth: "1991-11-27",
            email: "manoj.verma@example.com",
            phone: "+91 90000 10007"
        },

        employment: {
            designation: "Purchase Executive",
            department: "Purchase",
            employmentType: "Full Time",
            joiningDate: "2021-09-20",
            reportingManager: "EMP-001",
            workLocation: "Head Office",
            status: "Active"
        },

        salary: {
            basicSalary: 42000,
            allowances: 10000,
            deductions: 2500,
            netSalary: 49500,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Manoj Verma",
            bankName: "Punjab National Bank",
            branchName: "Nashik Branch",
            accountNumber: "000000100007",
            accountType: "Salary",
            ifscCode: "PUNB0001007"
        },

        identification: {
            panNumber: "GGGGG0007G",
            employeeId: "EMPID0007"
        },

        emergencyContact: {
            name: "Anita Verma",
            relationship: "Spouse",
            phone: "+91 90000 11007"
        },

        address: {
            street: "Dwarka",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422011",
            country: "India"
        }
    },

    {
        id: 8,
        employeeCode: "EMP-008",

        personalInfo: {
            firstName: "Amit",
            lastName: "More",
            gender: "Male",
            dateOfBirth: "1996-01-14",
            email: "amit.more@example.com",
            phone: "+91 90000 10008"
        },

        employment: {
            designation: "Machine Operator",
            department: "Production",
            employmentType: "Full Time",
            joiningDate: "2023-03-06",
            reportingManager: "EMP-005",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 22000,
            allowances: 5000,
            deductions: 1500,
            netSalary: 25500,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Amit More",
            bankName: "State Bank of India",
            branchName: "Ambad Branch",
            accountNumber: "000000100008",
            accountType: "Salary",
            ifscCode: "SBIN0001008"
        },

        identification: {
            panNumber: "HHHHH0008H",
            employeeId: "EMPID0008"
        },

        emergencyContact: {
            name: "Sunil More",
            relationship: "Father",
            phone: "+91 90000 11008"
        },

        address: {
            street: "Ambad",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422010",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 9,
        employeeCode: "EMP-009",

        personalInfo: {
            firstName: "Rohit",
            lastName: "Kale",
            gender: "Male",
            dateOfBirth: "1993-06-30",
            email: "rohit.kale@example.com",
            phone: "+91 90000 10009"
        },

        employment: {
            designation: "Quality Inspector",
            department: "Quality Control",
            employmentType: "Full Time",
            joiningDate: "2023-07-17",
            reportingManager: "EMP-003",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 28000,
            allowances: 6000,
            deductions: 1800,
            netSalary: 32200,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Rohit Kale",
            bankName: "ICICI Bank",
            branchName: "Satpur Branch",
            accountNumber: "000000100009",
            accountType: "Salary",
            ifscCode: "ICIC0001009"
        },

        identification: {
            panNumber: "IIIII0009I",
            employeeId: "EMPID0009"
        },

        emergencyContact: {
            name: "Sunita Kale",
            relationship: "Mother",
            phone: "+91 90000 11009"
        },

        address: {
            street: "Nashik Road",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422101",
            country: "India"
        },

        status: "Active"
    },

    {
        id: 10,
        employeeCode: "EMP-010",

        personalInfo: {
            firstName: "Sanjay",
            lastName: "Pawar",
            gender: "Male",
            dateOfBirth: "1989-10-12",
            email: "sanjay.pawar@example.com",
            phone: "+91 90000 10010"
        },

        employment: {
            designation: "Warehouse Manager",
            department: "Warehouse",
            employmentType: "Full Time",
            joiningDate: "2020-11-02",
            reportingManager: "EMP-001",
            workLocation: "Factory",
            status: "Active"
        },

        salary: {
            basicSalary: 48000,
            allowances: 11000,
            deductions: 3000,
            netSalary: 56000,
            payFrequency: "Monthly"
        },

        bankDetails: {
            accountHolderName: "Sanjay Pawar",
            bankName: "Bank of Maharashtra",
            branchName: "CIDCO Branch",
            accountNumber: "000000100010",
            accountType: "Salary",
            ifscCode: "MAHB0001010"
        },

        identification: {
            panNumber: "JJJJJ0010J",
            employeeId: "EMPID0010"
        },

        emergencyContact: {
            name: "Kavita Pawar",
            relationship: "Spouse",
            phone: "+91 90000 11010"
        },

        address: {
            street: "CIDCO",
            city: "Nashik",
            state: "Maharashtra",
            pincode: "422009",
            country: "India"
        },

        status: "Active"
    }
];

export default employees;