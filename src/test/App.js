import {useState,useEffect} from 'react';


const App = () => {
    const [note,setNote] = useState("");
    useEffect(()=>{
        let title = "React Hooks"
        console.log('執行中')
        setNote(title);
    })
    return <h1>{note}</h1>;
}
 
export default App;