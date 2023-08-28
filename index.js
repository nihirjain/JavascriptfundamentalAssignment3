let Car = {
    make:"Maruti",
    Model:"Breeza",
    Year:2019
}

function Carproperty(Cars){
    for(let item of Object.keys(Car)){
        console.log(`${item} : ${Car[item]}`)
    }
}

Carproperty(Car)