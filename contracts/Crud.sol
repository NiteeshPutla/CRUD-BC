//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract CRUD{
    struct employee{
        string name;
        string email;
        uint256 age;
        address walletAddress;
    }
    employee [] public employees;
    uint256 public totalEmployees;

    constructor(){
        totalEmployees=0;
    }
    function create(string memory name, string memory email, uint256 age,address walletAddress)public returns(uint256 _totalEmployees){
        employee memory newEmployee=employee(name,email,age,walletAddress);
        employees.push(newEmployee);
        totalEmployees++;
        return totalEmployees;

    }
    function updateEmployee(string memory name, string memory email)external returns (bool){
        for(uint i =0; i< totalEmployees; i++){
            if(compareStrings(employees[i].email,email)){
                employees[i].name = name;
                return true;
            }

        }
        return false;
    }
    function readEmployee(string memory email)external view returns(string memory _name,string memory _email, uint256 _age,address walletAddress){
        for(uint i=0; i<totalEmployees; i++){
            if(compareStrings(employees[i].email,email)){
                return(employees[i].name,employees[i].email,employees[i].age,employees[i].walletAddress);
            }
    }
}
    function deleteEmployee(string memory email)public returns (bool success){
        require(totalEmployees>0);
        for(uint i=0; i<totalEmployees; i++){
            if(compareStrings(employees[i].email,email)){
                employees[i]=employees[totalEmployees-1];
                delete employees[totalEmployees-1]; 
                totalEmployees--;

                return true;
            
            }
        }
        return false;
    }

    function compareStrings(string memory a, string memory b)internal pure returns (bool){
        return keccak256(abi.encodePacked(a))==keccak256(abi.encodePacked(b));
    }

}