const machines = [
    {
        id: 1,
        machineCode: "MCH-001",
        machineName: "Hydraulic Compression Moulding Machine",
        machineType: "Compression Machine",
        manufacturer: "RubberTech Industries",
        modelNumber: "RT-CM-250",
        serialNumber: "RTCM250-2023-001",

        specifications: {
            capacity: "250 Ton",
            heatingType: "Electric",
            maximumTemperature: 200,
            temperatureUnit: "°C",
            hydraulicPressure: 250,
            pressureUnit: "Ton",
            powerConsumption: 32,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2023-03-15",
            installationDate: "2023-04-05",
            purchaseCost: 1850000,
            warrantyExpiryDate: "2026-04-04"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Compression Moulding"
        },

        operation: {
            operatorRequired: true,
            currentOperator: "EMP-008",
            shift: "General",
            productionCapacity: "120 cycles/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-08-10",
            nextMaintenanceDate: "2026-11-10",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 28500
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for O-rings, gaskets and rubber plugs"
    },

    {
        id: 2,
        machineCode: "MCH-002",
        machineName: "Hydraulic Compression Press",
        machineType: "Compression Moulding Machine",
        manufacturer: "HydroMec Systems",
        modelNumber: "HCP-400",
        serialNumber: "HCP400-2022-014",

        specifications: {
            capacity: "400 Ton",
            heatingType: "Electric",
            maximumTemperature: 220,
            temperatureUnit: "°C",
            hydraulicPressure: 400,
            pressureUnit: "Ton",
            powerConsumption: 45,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2022-06-20",
            installationDate: "2022-07-15",
            purchaseCost: 2650000,
            warrantyExpiryDate: "2025-07-14"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Heavy Moulding"
        },

        operation: {
            operatorRequired: true,
            currentOperator: "EMP-008",
            shift: "Morning",
            productionCapacity: "90 cycles/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-07-20",
            nextMaintenanceDate: "2026-10-20",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 42000
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for large rubber mounts and industrial components"
    },

    {
        id: 3,
        machineCode: "MCH-003",
        machineName: "Rubber Sheet Hydraulic Press",
        machineType: "Hydraulic Press",
        manufacturer: "PressTech India",
        modelNumber: "PTH-600",
        serialNumber: "PTH600-2021-008",

        specifications: {
            capacity: "600 Ton",
            heatingType: "Electric",
            maximumTemperature: 200,
            temperatureUnit: "°C",
            hydraulicPressure: 600,
            pressureUnit: "Ton",
            powerConsumption: 55,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2021-08-10",
            installationDate: "2021-09-01",
            purchaseCost: 3250000,
            warrantyExpiryDate: "2024-08-31"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Rubber Sheet Production"
        },

        operation: {
            operatorRequired: true,
            currentOperator: "EMP-008",
            shift: "General",
            productionCapacity: "80 sheets/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-06-15",
            nextMaintenanceDate: "2026-09-15",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 51000
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for manufacturing rubber sheets"
    },

    {
        id: 4,
        machineCode: "MCH-004",
        machineName: "Rubber Bush Moulding Machine",
        machineType: "Compression Moulding Machine",
        manufacturer: "MoldMaster Engineering",
        modelNumber: "MM-300",
        serialNumber: "MM300-2024-003",

        specifications: {
            capacity: "300 Ton",
            heatingType: "Electric",
            maximumTemperature: 210,
            temperatureUnit: "°C",
            hydraulicPressure: 300,
            pressureUnit: "Ton",
            powerConsumption: 38,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2024-01-10",
            installationDate: "2024-02-01",
            purchaseCost: 2100000,
            warrantyExpiryDate: "2027-01-31"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Automotive Components"
        },

        operation: {
            operatorRequired: true,
            currentOperator: "EMP-008",
            shift: "Evening",
            productionCapacity: "150 cycles/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-08-05",
            nextMaintenanceDate: "2026-11-05",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 22000
        },

        status: "Running",
        condition: "Excellent",
        remarks: "Dedicated machine for rubber bush production"
    },

    {
        id: 5,
        machineCode: "MCH-005",
        machineName: "Transfer Moulding Machine",
        machineType: "Transfer Moulding Machine",
        manufacturer: "TransferTech Pvt. Ltd.",
        modelNumber: "TT-250",
        serialNumber: "TT250-2023-011",

        specifications: {
            capacity: "250 Ton",
            heatingType: "Electric",
            maximumTemperature: 210,
            temperatureUnit: "°C",
            hydraulicPressure: 250,
            pressureUnit: "Ton",
            powerConsumption: 35,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2023-05-12",
            installationDate: "2023-06-01",
            purchaseCost: 2350000,
            warrantyExpiryDate: "2026-05-31"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Transfer Moulding"
        },

        operation: {
            operatorRequired: true,
            currentOperator: "EMP-008",
            shift: "Morning",
            productionCapacity: "100 cycles/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-07-05",
            nextMaintenanceDate: "2026-10-05",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 31000
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for rubber mounts and bellows"
    },

    {
        id: 6,
        machineCode: "MCH-006",
        machineName: "Heavy Duty Rubber Press",
        machineType: "Hydraulic Compression Machine",
        manufacturer: "Industrial Press Systems",
        modelNumber: "IPS-800",
        serialNumber: "IPS800-2020-006",

        specifications: {
            capacity: "800 Ton",
            heatingType: "Electric",
            maximumTemperature: 220,
            temperatureUnit: "°C",
            hydraulicPressure: 800,
            pressureUnit: "Ton",
            powerConsumption: 70,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2020-09-15",
            installationDate: "2020-10-10",
            purchaseCost: 4500000,
            warrantyExpiryDate: "2023-10-09"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Heavy Components"
        },

        operation: {
            operatorRequired: true,
            currentOperator: null,
            shift: "General",
            productionCapacity: "60 cycles/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-05-10",
            nextMaintenanceDate: "2026-08-10",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 75000
        },

        status: "Maintenance",
        condition: "Needs Maintenance",
        remarks: "Under scheduled preventive maintenance"
    },

    {
        id: 7,
        machineCode: "MCH-007",
        machineName: "Rubber Extrusion Machine",
        machineType: "Extrusion Machine",
        manufacturer: "ExtrudeTech India",
        modelNumber: "ET-90",
        serialNumber: "ET90-2024-007",

        specifications: {
            screwDiameter: 90,
            screwUnit: "mm",
            extrusionCapacity: "150 kg/hour",
            maximumTemperature: 180,
            temperatureUnit: "°C",
            powerConsumption: 60,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2024-05-15",
            installationDate: "2024-06-01",
            purchaseCost: 3800000,
            warrantyExpiryDate: "2027-05-31"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Rubber Extrusion"
        },

        operation: {
            operatorRequired: true,
            currentOperator: "EMP-008",
            shift: "Morning",
            productionCapacity: "150 kg/hour"
        },

        maintenance: {
            lastMaintenanceDate: "2026-07-15",
            nextMaintenanceDate: "2026-10-15",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 35000
        },

        status: "Running",
        condition: "Excellent",
        remarks: "Used for rubber tubes, cords and seal strips"
    },

    {
        id: 8,
        machineCode: "MCH-008",
        machineName: "Internal Rubber Mixer",
        machineType: "Rubber Mixing Machine",
        manufacturer: "MixMaster Industries",
        modelNumber: "IM-75",
        serialNumber: "IM75-2022-009",

        specifications: {
            chamberCapacity: "75 Litres",
            rotorType: "Tangential",
            mixingCapacity: "60 kg/batch",
            maximumTemperature: 160,
            temperatureUnit: "°C",
            powerConsumption: 110,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2022-03-20",
            installationDate: "2022-04-15",
            purchaseCost: 4200000,
            warrantyExpiryDate: "2025-04-14"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Rubber Mixing"
        },

        operation: {
            operatorRequired: true,
            currentOperator: null,
            shift: "Morning",
            productionCapacity: "60 kg/batch"
        },

        maintenance: {
            lastMaintenanceDate: "2026-08-01",
            nextMaintenanceDate: "2026-11-01",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 48000
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for mixing rubber compounds with chemicals"
    },

    {
        id: 9,
        machineCode: "MCH-009",
        machineName: "Two Roll Rubber Mixing Mill",
        machineType: "Two Roll Mill",
        manufacturer: "RubberMill Technologies",
        modelNumber: "RM-24",
        serialNumber: "RM24-2023-005",

        specifications: {
            rollDiameter: 610,
            rollUnit: "mm",
            rollLength: 1800,
            maximumTemperature: 120,
            temperatureUnit: "°C",
            powerConsumption: 75,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2023-07-12",
            installationDate: "2023-08-01",
            purchaseCost: 1950000,
            warrantyExpiryDate: "2026-07-31"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Rubber Mixing"
        },

        operation: {
            operatorRequired: true,
            currentOperator: null,
            shift: "Evening",
            productionCapacity: "80 kg/batch"
        },

        maintenance: {
            lastMaintenanceDate: "2026-06-25",
            nextMaintenanceDate: "2026-09-25",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 27000
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for sheet-out and compound preparation"
    },

    {
        id: 10,
        machineCode: "MCH-010",
        machineName: "Rubber Cutting Machine",
        machineType: "Cutting Machine",
        manufacturer: "CutPro Industries",
        modelNumber: "CP-1500",
        serialNumber: "CP1500-2024-002",

        specifications: {
            cuttingWidth: 1500,
            cuttingUnit: "mm",
            maximumThickness: 50,
            thicknessUnit: "mm",
            powerConsumption: 15,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2024-02-15",
            installationDate: "2024-03-01",
            purchaseCost: 850000,
            warrantyExpiryDate: "2027-02-28"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Cutting"
        },

        operation: {
            operatorRequired: true,
            currentOperator: null,
            shift: "General",
            productionCapacity: "500 cuts/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-07-20",
            nextMaintenanceDate: "2026-10-20",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 12000
        },

        status: "Running",
        condition: "Excellent",
        remarks: "Used for cutting rubber sheets into required sizes"
    },

    {
        id: 11,
        machineCode: "MCH-011",
        machineName: "Rubber Vulcanizing Machine",
        machineType: "Vulcanizing Machine",
        manufacturer: "VulcanTech Industries",
        modelNumber: "VT-300",
        serialNumber: "VT300-2021-012",

        specifications: {
            capacity: "300 Ton",
            heatingType: "Electric",
            maximumTemperature: 200,
            temperatureUnit: "°C",
            curingPressure: 300,
            pressureUnit: "Ton",
            powerConsumption: 42,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2021-11-10",
            installationDate: "2021-12-01",
            purchaseCost: 2400000,
            warrantyExpiryDate: "2024-11-30"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Vulcanizing"
        },

        operation: {
            operatorRequired: true,
            currentOperator: null,
            shift: "Morning",
            productionCapacity: "100 cycles/day"
        },

        maintenance: {
            lastMaintenanceDate: "2026-07-01",
            nextMaintenanceDate: "2026-10-01",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 33000
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for rubber curing and vulcanization"
    },

    {
        id: 12,
        machineCode: "MCH-012",
        machineName: "Rubber Grinding Machine",
        machineType: "Grinding Machine",
        manufacturer: "GrindTech Engineering",
        modelNumber: "GT-500",
        serialNumber: "GT500-2022-004",

        specifications: {
            grindingCapacity: "100 kg/hour",
            maximumParticleSize: 10,
            particleUnit: "mm",
            powerConsumption: 45,
            powerUnit: "kW"
        },

        installation: {
            purchaseDate: "2022-09-12",
            installationDate: "2022-10-01",
            purchaseCost: 1250000,
            warrantyExpiryDate: "2025-09-30"
        },

        location: {
            plant: "Main Manufacturing Plant",
            department: "Production",
            section: "Grinding & Recycling"
        },

        operation: {
            operatorRequired: true,
            currentOperator: null,
            shift: "General",
            productionCapacity: "100 kg/hour"
        },

        maintenance: {
            lastMaintenanceDate: "2026-08-15",
            nextMaintenanceDate: "2026-11-15",
            maintenanceFrequency: "Every 3 Months",
            lastMaintenanceCost: 18500
        },

        status: "Running",
        condition: "Good",
        remarks: "Used for rubber scrap recycling and grinding"
    }
];

export default machines;