export default function createReportObject(employeesList) {
    return{
        allEmployees: {
            ...employeesList,
        },
        getNumberOfDepartments (methodEmployeesList) {
            return Object.keys(methodEmployeesList).length;
        },
    }
}