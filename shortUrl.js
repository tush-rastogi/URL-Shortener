const mongoose=require('mongoose');
const shortId=require('shortid');
const schema=mongoose.Schema;

const dBschema=new schema({
 
     OriginalUrl:{
         type:String,
          required:true
     },

      ShortUrl:{
          type:String,
          required:true,
          default:shortId.generate
        },

        Clicks:{
            type:Number,
            required:true,
            default:0
        }
            
  
})
      
module.exports=mongoose.model('urls',dBschema)