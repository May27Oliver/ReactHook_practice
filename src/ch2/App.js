import './App.css';//create react app 的loader讓我們可以import css檔案，不只是javascript檔案，這些事webpack做的事
import {useState} from 'react';//每一個componenet內都有自己的資料狀態

function App() {
  let [count,setCount] = useState({number:256});//useState內可以是物件

  const handleClick = (type) => {
    if(type ==='increase'){
      //在接收非同步事件要處理state時可以在setCount內用callback的方式進行
      setCount((prevCount)=>({number:prevCount.number+1}));
    }else if(type ==='decrease'){
      setCount((prevCount)=>({number:prevCount.number-1}));
    }
  }
  return (
    <div className="container">
      <div className="chevron chevron-up" onClick={()=>handleClick('increase')}></div>
      <div className="number">{count.number}</div>
      <div className="chevron chevron-down" onClick={()=>handleClick('decrease')}></div>
    </div>
  )
}

export default App;
