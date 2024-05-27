import jwt from 'jsonwebtoken'

// sign ({id: userid, email: usermail@gmail.com}, secret-code. {expire})

const token = jwt.sign(
    {id:12, email: 'user@gmail.com', name: 'user'},
    '123456',
    {expiresIn: 60 * 1000}
)

// console.log(token);

const mytoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2ZXNAdm1pbGUuY29tIiwiaWF0IjoxNzE2ODAyNjIwLCJleHAiOjE3MTY4MDI2MjB9.6PLcrAIU9SC5gDuUnsSkY_MNqNjBXe9aQXyayK5qO7E'

// verify(token, secret, (err, decode) => {})

jwt.verify(mytoken, '123456', (err, decode) => {
    if(err) return console.log(err.message);

    console.log(new Date(decode.exp).toLocaleString());
})