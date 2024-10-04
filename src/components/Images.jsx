import {useState,useEffect} from 'react';
function Images(){
 let [state,setState]=useState([]);
 let [search,upsearch]=useState('')
    useEffect(()=>{
    let api=fetch(`https://pixabay.com/api/?key=46193734-462260c7988f4ba4ffcbd7836&q=${search}&image_type=photo`)
    api.then(x=>x.json()).then(y=>{
        // console.log(state.data);
        setState(y.hits)
       
    },[state])
    console.log(state);
    })
    return(
       
            <>
           
            <div className="para" id="inputbox">
            <input type="text"  onChange={(e)=>upsearch(e.target.value)} id="input"  />
            </div>
            <div id="parent" >
            {state.map(x=>{
                return(
                    <div key={x.id}>      
                   
                   
                    <img src={x.webformatURL} alt="img"  id="imgs"/>
                    
                    
                  
                    </div>
                )
            })}
             </div>
            </>
       
    )
}
export default Images;