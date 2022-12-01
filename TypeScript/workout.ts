interface Admin {
    firstname:String
}

interface User {
    lastNo:string
}

type Person = User|Admin ;

const student: Person[] =[
    {
        firstname:'Shkanda'
    },
    {
        lastNo:'Vikash'
    }
    
]

student.forEach(logOutPut);

function logOutPut(studen:Person){
  console.log(typeof studen)

}
