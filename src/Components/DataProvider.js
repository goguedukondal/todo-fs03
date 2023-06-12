import React, { createContext, useContext, useState } from "react";
import { v4 as idGen } from "uuid";
const MyContext = createContext();
export const useItem = ()=>useContext(MyContext);
 
const DataProvider = ({ children }) => {
    const [items,setItems] = useState([])

    const addItem=(item)=>{
        setItems([
            ...items,{
                id:idGen(),
                item:item,
            }
        ])
    }
    const del = (i)=>{
        setItems(items.filter((ele)=>ele.id!==i))
    }
    return (
       <MyContext.Provider value={{items,addItem,del}}>
        {children}
       </MyContext.Provider>
    )
}
  
  export default DataProvider;