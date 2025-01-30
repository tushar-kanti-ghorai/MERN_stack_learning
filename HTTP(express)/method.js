const express = require("express");

const app = express();

const users = [{
    name: "abhi",
    kidney: [{
        healthy: true,
    }]
}];

app.use(express.json());

app.get("/", function (req, res) {
    const abhiHealth = users[0].kidney;
    const countKidney = abhiHealth.length;
    let numberOfHealthy = 0;

    for (let i = 0; i < abhiHealth.length; i++) {
        if (abhiHealth[i].healthy) {
            numberOfHealthy += 1;
        }
    }

    const numberOfUnhealthy = countKidney - numberOfHealthy;

    res.json({
        countKidney,
        numberOfHealthy,
        numberOfUnhealthy
    });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    });
    res.json({
        msg: "done!"
    });
});

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true;
    }
    res.json({
        msg: "All kidneys marked as healthy"
    });
});

app.delete("/", function (req, res) {
    if(isThereatLeastoneUnhealthy()){
    const newHealthy = users[0].kidney.filter(kidney => kidney.healthy);
    users[0].kidney = newHealthy;
    res.json({
        msg: "Unhealthy kidneys removed"
    });
}else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    })
}
});

function isThereatLeastoneUnhealthy(){
    let atleastoneunhealthy=false
    for(let i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney[i].healthy){
            atleastoneunhealthy=true;
        }
    }
    return atleastoneunhealthy
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
