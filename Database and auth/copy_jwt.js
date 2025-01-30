const jwt=require("jsonwebtoken");

const copyValue=(
    {
        "name": "Tushar",
        "password": "123254",
        "iat": 1722229705
      }
)

const newToken=jwt.sign(copyValue,"secret");

console.log(newToken);
