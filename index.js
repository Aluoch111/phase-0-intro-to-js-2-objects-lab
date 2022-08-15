// Write your solution in this file!
const employee = {
    employeeName : "Sam",
    streetAddress : "12 hyde court",
};
function updateEmployeeWithKeyAndValue(employee,streetAddress){
    const newEmployee = {...employee};
    newEmployee [streetAddress] = "11 Broadway";
    return newEmployee ;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.streetAddress = "12 Broadway";
    return employee ;
}
function deleteFromEmployeeByKey(employee,employeeName){
    const mutEmployee = {...employee};
     delete(mutEmployee[employeeName]);
    return mutEmployee ;
}
function destructivelyDeleteFromEmployeeByKey(employee,employeeName){
   delete (employee[employeeName]);
    return employee ;
}