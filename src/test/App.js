import { useState, useEffect } from 'react';
import { getTodos } from '../api/todos'

const storePort = { title: "React Hooks" }

const App = () => {
    console.log('上面')
    const [note, setNote] = useState({ title: "" });
    useEffect(() => {
        console.log('中間') 
        setNote(storePort);
    })
    return (
        <>
            {console.log('下面')}
            <h1>{note.title}</h1>
        </>
    );
}

//1.作為參數投入setNote的物件，如果指向不同的記憶體位置就會觸發資料改變，接著畫面render。
//2.如果投入useState()的note是string或number，在前後值相同的狀況下不會觸發無限迴圈。

export default App;