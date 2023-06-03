require('dotenv').config();
const express= require('express');
const socketio = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const connectDB = require('./db/mongoDb');
const authRouter = require('./routes/auth');
const conversationRouter = require('./routes/coversation')
const messageRouter = require('./routes/message')

const notFound = require('./middlewares/not_found');
const authMiddleWare = require('./middlewares/auth');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(helmet());
app.use(cors());
app.use(xss());

const server = require('http').createServer(app);
io = socketio(server);



app.get('/',(req,res)=>{
    return res.send("Welcome To Messenger Clone");
})


app.use('/api/v1/auth',authRouter);
app.use('/api/v1/messages',authMiddleWare,messageRouter);
app.use('/api/v1/conversations',authMiddleWare,conversationRouter);

app.use(notFound);




const port = process.env.PORT || 5000;

let main =  async ()=>{
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

main();
