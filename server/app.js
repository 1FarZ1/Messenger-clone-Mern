require('dotenv').config();
const express= require('express');
const socketio = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser')
const connectDB = require('./db/mongoDb');

const authRouter = require('./routes/auth');
const conversationRouter = require('./routes/coversation')
const messageRouter = require('./routes/message')

const notFound = require('./middlewares/not_found');
const authMiddleWare = require('./middlewares/auth');




// cors options
// const corsOptions = {
//    AccessControlAllowOrigin: '*',
//    origin: 'http://localhost:5173',
//    credentials: true,
//    origin:true,
//    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
//  }
const app = express();


app.use(cors({ origin:"http://localhost:5173" , credentials: true }));



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cookieParser(
   "secret"
))
app.use(helmet());
app.use(xss());

const server = require('http').createServer(app);
const io = socketio(server);



app.get('/',(req,res)=>{
    return res.send("Welcome To Messenger Clone");
})


app.use('/api/v1/auth',authRouter);
app.use('/api/v1/messages',messageRouter);
app.use('/api/v1/conversations',conversationRouter);

app.use(notFound);




const port = process.env.PORT || 5000;

let main = async ()=>{
   try {
    let result = await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB " + result.connections[0].name);
    server.listen(port,()=>{
        console.log(`Server is listening in http://127.0.0.1:`+ port);
   }     
);
   } catch (error) {
    console.log(error);  
   }
    
}


io.on("connection", (socket) => {
   socket.on("MessageSent", (msg, convId) => {
       socket.to(convId).emit("Receive-msg",msg)
   })
   socket.on("join-Conv", (convId) => {
       socket.join(convId);
   })
   socket.on("leave-conv", (convId) => {
       socket.leave(convId);
   })
})


main();




// let allowlist = ['*', 'http://localhost:5173']
// let corsOptionsDelegate =  (req, callback) => {
//    let corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions =  // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: true } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }