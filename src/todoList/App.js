import TodoApp from './views/TodoApp';
import Login from './views/Login';
import NotFound from './views/NotFound';
import './App.css';
import {useState} from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

//規格：判斷有無登入過，有登入過一進頁面便不用在從登入頁開始。

const App = () => {
    //頁面轉換，用useState方法：
    // const [currentPage,setCurrentPage]=useState('Login');
    // const handleSetPage = (page) => {
    //     setCurrentPage(page);
    // }

    //頁面轉換，用React Router方法：
    const isLogin = false; 
    const isAtLogin = useRouteMatch('/login');
    /*
        useRouteMatch是React Router的hook，如果頁面匹配了參數內的url路徑，則會回傳一個物件
        {path: "/login", url: "/login", isExact: true, params: {…}}
    */ 
    if(!isLogin && !isAtLogin)//如果isAtLogin已經
        return <Redirect to="/login"/>;

    return (
        <div className = "app">
            <Switch>
                <Route path="/" exact>
                    {isLogin?<Redirect to="/todos"/>:<Redirect to="/login"/>}
                </Route>
                <Route path='/todos' component={TodoApp}/>
                <Route path='/login' component={Login}/>
                <Route path='*' component={NotFound}/>
            </Switch>
            {/* 
                1. path="/"代表在根目錄
                2. exact屬性:路徑需要完全符合才會導到該頁面，在這裡是isLogin是true才會執行 
                3.path屬性：比對url路徑
                4.component屬性：url吻合後要前往哪個component 
                參考網址：https://ithelp.ithome.com.tw/articles/10243368?sc=iThomeR
            */}
        </div>
    )
}
export default App;