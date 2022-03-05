const express =require('express');
const app=express();
const mongoose=require('mongoose');
const x=require('./models/shortUrl')

 const dB='mongodb+srv://tush_17:test1234@urlshortener.q2chk.mongodb.net/UrlShortener?retryWrites=true&w=majority';
  mongoose.connect(dB,{
      useNewUrlParser:true,
      useUnifiedTopology:true

  })
app.set('view engine','ejs')
 app.use(express.urlencoded({extend:false}));
app.get('/',async (req,res)=>{

       
      const shortUrls=await x.find()
      res.render('index',{shortUrls:shortUrls});

 })

app.post("/shortUrl",async (req,res)=>{

     await  x.create({OriginalUrl:req.body.OriginalUrl})
     res.redirect('/');
})

app.get('/:Shorturl',async (req,res)=>{

      const k=await x.findOne({ShortUrl:req.params.Shorturl}) ; 

        // console.log(k);
        if(k==null)
          return res.sendStatus(404);

           k.Clicks++;
           k.save(); 
          
          res.redirect(k.OriginalUrl)

})
app.listen(8000);
