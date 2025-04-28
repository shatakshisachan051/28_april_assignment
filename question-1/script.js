
function fineCalculator(rentals){

    let fineforCar={
        SUV: 500,
        Sedan:300,
        Hatchback: 200
    }

    let totalFineForAll=0

    rentals.forEach( rents=>{
       // let perDayFine=0

        let perDayFine = fineforCar[rents.carType]
        let fine = perDayFine * (rents.daysLate)

        if(rents.isFrequentCustomer){
            fine= fine- (fine*(20/100))
        }

        totalFineForAll = totalFineForAll+fine
        if(totalFineForAll >5000){
            totalFineForAll=5000
        }


    })

    
        

        return totalFineForAll;
}









// inputs

let rentals= [
    { customer: "Raj", daysLate: 2, carType: "SUV", isFrequentCustomer: true },
    { customer: "Ananya", daysLate: 5, carType: "Sedan", isFrequentCustomer: false },
    { customer: "Kabir", daysLate: 0, carType: "Hatchback", isFrequentCustomer: false }
  ]


  let getFine= fineCalculator(rentals);

  console.log(getFine)