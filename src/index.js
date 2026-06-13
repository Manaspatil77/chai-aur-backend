// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDb from "./db/index.js";


dotenv.config({
    path: './.env'
})


connectDb()

// const app = express();


// (async () => {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error",(error) =>{
//             console.error("ERROR:",error);
//             throw error

//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening at ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })()