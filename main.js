const express = require('express');

const app = express();
const port = 4000;


app.set('views','./views');
app.set('view engine','pug')

const date=new Date()
const jours=date.getDay()
console.log(jours)
const heures = date.getHours()
console.log(heures)
const check=(req,res,next)=>{

if((jours==6 || jours==0) || (heures > 17 || heures < 9 ))
{return res.status(400).send("closed")}
else{next()}
}
app.use(check)

app.get('/request', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.get('/',function (req, res,next) {
  res.render('Home',{time:date.toString()});
  next();
})
app.get('/ContactUs',function (req, res,next) {
  res.render('Contact');
  next();
})
app.get('/OurServices',function (req, res) {
  res.render('Services');
})
// const firstMiddleware = (req,res,next)=>{
//     console.log("this is admin")
//     next()
// }
// app.use(firstMiddleware)
//   app.get('/',function (req, res) {
//     res.send('Hello Home Page ');
//   })

  app.listen(port, function() {
    console.log('The server is running, ' + `please, open your browser at localhost:${port}`)});