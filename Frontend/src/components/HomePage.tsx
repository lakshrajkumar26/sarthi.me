import React, { useState } from 'react'
import axios from  "axios";
import "./HomePage.css";



const HomePage = () => {

 const [text,setText] = useState<string>("")

 const [loading ,setLoading] = useState<boolean>(false);
 
 //emotion from backend
 const [emotion , setEmotion] = useState<string | null > ("");
 const [confidence ,setConfidence] = useState<number | null>(0);


const handleSubmit = async () => {
    const URL ="";
    setLoading(true); //before async starts
    setEmotion(null);
    setConfidence(null);

    try{
    console.log(text);
    const res = await axios.post(URL,{text});
    console.log ("res send",res.data)
    setEmotion(res.data.emotion);
    setConfidence(res.data.confidence);
    
    }
    catch(err){
        console.log("error occurred in posting data",err);
        setEmotion('Error fetching emotion');
        setConfidence(null);
    }finally   // after async completes
    {
       setLoading(false);
    }
     
}
  return (
    <><div className="main"> 
    <h1>Emotion Reflection Tool</h1> 

    <textarea
     placeholder='Enter Your Text...'
     onChange={(e : React.ChangeEvent<HTMLTextAreaElement>)=>(setText(e.target.value))}
     value={text}/>

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