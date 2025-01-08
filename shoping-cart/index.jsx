import style from "@/styles/style.module.css";

import {  useEffect, useState } from "react";

export default function Home() {
const [data,setdata]=useState([])



  const isibox = [
    {
      id: 1,
      name: "nieke",
      gambar: "./assets/ball.png",
      price:150
    },
    {
      id: 2,
      name: "poma",
      gambar: "./assets/ball.png",
      price: 100
    },
  ];

  const tambahdata = (val) => {
    setdata((prevstate)=>{
      const exist= prevstate.find((item)=>item.id===val.id)
      if(exist){
        return prevstate.map(item=> item.id===val.id? {...item,quantity:item.quantity+1}:item)
      }else{
        return [...prevstate, {...val,quantity:1}]
      }
    })
  };

  const minus=(idnya,minusnya)=>{ 
    const ojek = data.find((item)=>item.id===idnya)
    if(minusnya === 0){
      return setdata(data.filter(item=>item !== ojek))      
    }else{
      setdata((prevstate)=>{
        return prevstate.map(item=> item.id===idnya? {...item,quantity:minusnya}:item)
      })
    }     
  }

  const plus=(idnya,plusnya)=>{   
      setdata((prevstate)=>{
        return prevstate.map(item=> item.id===idnya ? {...item,quantity:plusnya}:item)
      })
    
  }


  return (
    <div className={style.container}>
      <div className={style.atas}>
        {isibox.map((val, index) => (
          <div key={index} className={style.boxitem}>
            <div ></div>
            <div>
              <img
                className="rounded-full"
                src={val.gambar}
                width="100"
                alt=""
              />
            </div>
            <div>{val.name}  ${val.price}</div> 

            <div>
              <button onClick={()=>tambahdata(val)} className={style.button}>
                tambahdata
              </button>             
            </div>
           
          </div>
        ))}
      </div>    
      <div>
        {data.map((val,index)=>
        <li className="flex gap-3" key={index}>
           {val.name} {val.quantity} ${val.price} total = ${val.price * val.quantity} 
           <br />          
            <button className={style.button} onClick={()=>minus(val.id,val.quantity-1)}>-</button>
            <button className={style.button} onClick={()=>plus(val.id,val.quantity+1)}>+</button>            
        </li>
        )}
        <div>total semua = ${data.reduce((acc,cur)=> acc + cur.price * cur.quantity,0)}</div>
      </div>
        
    </div>
  );
}
