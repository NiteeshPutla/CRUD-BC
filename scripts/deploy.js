// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const CRUD = await hre.ethers.getContractFactory("CRUD");
  const crud = await CRUD.deploy();

  await crud.deployed();

  console.log(
    `Crud deployed to:`,crud.address
  );
  const totalEmployees1=await crud.totalEmployees();

  const response=await crud.create("Niteesh","niteeshjoyal@gmail.com","24","0x5FbDB2315678afecb367f032d93F642f64180aa3")
  const response1=await crud.create("jessy","niteeshjessy@gmail.com","24","0x5B38Da6a701c568545dCfcB03FcB875f56beddC4")

  const totalEmployees2=await crud.totalEmployees();
  const employee=await crud.employees(0);
   console.log(employee);
   console.log(totalEmployees1,totalEmployees2);
  //  console.log(response);
   await crud.updateEmployee("Joy","niteeshjoyal@gmail.com")
   const employee2=await crud.employees(0);
     console.log(employee2);

    await crud.deleteEmployee("niteeshjoyal@gmail.com")
    const employeeDelete=await crud.employees(0);
    // console.log(employeeDelete);

   await crud.readEmployee("niteeshjoyal@gmail.com")
   const employeeRead=await crud.employees(0);
   console.log(employeeRead);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
