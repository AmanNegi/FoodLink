import express from "express";
import connectDatabase from "./conn"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import cors from "cors"
import routes from "./routes/route"

connectDatabase();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());



app.use('/',routes);

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to FoodLink" });
});

app.get('*',(req,res)=>{
  return res.send(`<h1>Page not Found, Error 404</h1>`);
})

// get default poSrt
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log('1) please enter unique email everytime you create a new user')
  console.log('2) also enter the password to be minimum 8 character')
  console.log('error handeling is not completed yet, so make sure to follow the above two step')
});

