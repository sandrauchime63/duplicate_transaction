const input = [
    {
        name: "Hendrick",
        dob: "1853-07-18T00:00:00.000Z",
        regNo: "041",
    },
    {
        name: "Albert",
        dob: "1879-03-14T00:00:00.000Z",
        regNo: "033",
    },
    {
        name: "Marie",
        dob: "1867-11-07T00:00:00.000Z",
        regNo: "024",
    },
    {
        name: "Neils",
        dob: "1885-10-07T00:00:00.000Z",
        regNo: "02",
    },
    {
        name: "Max",
        dob: "1858-04-23T00:00:00.000Z",
        regNo: "014",
    },
    {
        name: "Erwin",
        dob: "1887-08-12T00:00:00.000Z",
        regNo: "09",
    },
    {
        name: "Auguste",
        dob: "1884-01-28T00:00:00.000Z",
        regNo: "08",
    },
    {
        name: "Karl",
        dob: "1901-12-05T00:00:00.000Z",
        regNo: "120",
    },
    {
        name: "Louis",
        dob: "1892-08-15T00:00:00.000Z",
        regNo: "022",
    },
    {
        name: "Arthur",
        dob: "1892-09-10T00:00:00.000Z",
        regNo: "321",
    },
    {
        name: "Paul",
        dob: "1902-08-08T00:00:00.000Z",
        regNo: "055",
    },
    {
        name: "William",
        dob: "1890-03-31T00:00:00.000Z",
        regNo: "013",
    },
    {
        name: "Owen",
        dob: "1879-04-26T00:00:00.000Z",
        regNo: "052",
    },
    {
        name: "Martin",
        dob: "1871-02-15T00:00:00.000Z",
        regNo: "063",
    },
    {
        name: "Guye",
        dob: "1866-10-15T00:00:00.000Z",
        regNo: "084",
    },
    {
        name: "Charles",
        dob: "1868-02-14T00:00:00.000Z",
        regNo: "091",
    },
]

function classifier(input) {
    let slice = input.slice()
    if(slice.length===0){
        return {noOfGroups: 0}
    }
    let finalOutput = {}
    for (let index = 0; index < slice.length; index++) {
        slice[index].age = 2019 - (new Date(slice[index].dob)).getFullYear()
    }
    slice.sort((a,b) => a.age - b.age)
    let membersGroup = []
    let membersArr = []
    membersArr.push(slice[0])
    for (let i = 1; i < slice.length; i++) {
        if (slice[i].age - membersArr[0].age <= 5 && membersArr.length < 3) {
            membersArr.push(slice[i])
        }else {
            membersGroup.push(membersArr)
            membersArr = []
            membersArr.push(slice[i])
        }
    }
    if (membersArr.length > 0) {
        membersGroup.push(membersArr)
    }
    finalOutput.noOfGroups = membersGroup.length
    console.log(membersGroup)
    for (let i = 0; i < membersGroup.length; i++) {
        finalOutput[`group${i + 1}`] = {
          members: membersGroup[i],
          oldest: membersGroup[i][membersGroup[i].length-1].age,
          sum: membersGroup[i].reduce((acc, curr)=> acc + curr.age, 0),
          regNos: membersGroup[i].map((a)=>Number(a.regNo)).sort((a,b)=> a -b)
    }
}
console.log(finalOutput)
return finalOutput
}
classifier(input);
export default classifier;