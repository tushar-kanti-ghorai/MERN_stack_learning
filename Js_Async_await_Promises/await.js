function read() {
    return new Promise(function (resolve) {
            resolve("Y")
        
    })

}

async function main() {
    const a = await read()
    console.log(a)
    console.log("Tushar")
    // read().then(function(a){
    //     console.log(a)
    // })
}

main()
console.log("main")