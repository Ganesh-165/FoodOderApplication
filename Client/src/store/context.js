import React from "react";

const context = React.createContext({
    item:[],
    totalAmount:0,
    additem : (item)=>{},
    removeItem:(name)=>{},
    removeAll:()=>{}
});
export default context;