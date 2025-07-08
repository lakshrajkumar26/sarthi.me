import React, { useState } from 'react'
import axios from  "axios";
import "./HomePage.css";



const HomePage = () => {

 const [text,setText] = useState<string>("")

 const [loading ,setLoading] = useState<boolean>(false);
 
 //emotion from backend
 const [emotion , setEmotion] = useState<string>("");


const handleSubmit = async () => {
    setLoading(true); //before async starts
    try{
    const URL =""
    console.log(text);
    const res = await axios.post(URL,{text});
    console.log ("res send",res.data)
    
    }
    catch(err){
        console.log("error occurred in posting data",err)
    }finally   // after async completes
    {
       setLoading(false);
    }
     
}
  return (
    <><div className="main"> 
    <div><h1>Emotion Reflection Tool</h1> </div>
    <textarea name="" id="" placeholder='Enter Your Text...' onChange={(e : React.ChangeEvent<HTMLTextAreaElement>)=>(setText(e.target.value))}></textarea>
    <button  onClick={()=>handleSubmit()} disabled={loading} >{loading ?  'Submitting...' : 'Submit'}</button>
    <div className="display-emotion">
      <h2>Emotion {}</h2>
      <h2>Confidence {}</h2>
    </div>
    </div>
    
   
    </>
  )
}

export default HomePage