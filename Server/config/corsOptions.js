const { allowedOrigins } = require("./allowedOrgins");


exports.corsOptions = {
    origin:(orgin,callback)=>{
        if(allowedOrigins.indexOf(orgin)!==-1||!orgin){
            callback(null,true);
        }
        else{
            callback(new Error('Not Allowed By cors'));
        }
    },
    optionsSuccessstatus:200
} 
