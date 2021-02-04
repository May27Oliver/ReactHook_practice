import TodoApp from './views/TodoApp';
import Login from './views/Login';
import NotFound from './views/NotFound';
import './App.css';
import {useState,useEffect} from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

//規格：判斷有無登入過，有登入過一進頁面便不用在從登入頁開始。

const App = () => {
    //頁面轉換，用useState方法：
    // const [currentPage,setCurrentPage]=useState('Login');
    // const handleSetPage = (page) => {
    //     setCurrentPage(page);
    // }

    //頁面轉換，用React Router方法：
    const [res,setRes] = useState({});
    const isAtLogin = useRouteMatch('/login');
    
    //載入facebook開發者工具的SDK
    //SDK是整合了很多API的package
    useEffect(()=>{
        //下面的FB SDK載入完畢後會馬上執行fbAsyncInit
        window.fbAsyncInit = function() {
            //FB的SDK初始化
            window.FB.init({
            appId      : '1750021145156763',
            cookie     : true,
            xfbml      : true,
            version    : 'v9.0'
            });
            window.FB.getLoginStatus(function(response) {
                setRes(response);
            });
            window.FB.AppEvents.logPageView();   
        };

        (function(d, s, id){//在window載入FB工具
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },[]);

    const handleFBLogin = () => {
        window.FB.login((res)=>{
            setRes(res);
            //此處將回傳：
            /*
            {
                authResponse:
                accessToken: "EAAY3ooy03JsBAMgfrppEH2Fh9MQR8373EnWDAeTOGTCKUMcfnuHle1DYgSiglPAthtFK7Dpc7PdkZBYIp6zgdoNydyHgTEQthKB1PJkorFUnPIZChTcrtiZB4heTgTyEjZAqJlO4m2loA3Sx7VKGDnZBp4qZAVkAYouwKTwuaxL7ZCqFs7r5NA2IZC7hPeVLZBsvC9cYvaWeVkAZDZD"
                data_access_expiration_time: 1620223867
                expiresIn: 6533
                graphDomain: "facebook"
                signedRequest: "TxNLW77uMPtmQoq8Sn_Bkrs4fovaXk3XCABF5RYUT6I.eyJ1c2VyX2lkIjoiMTAxNTg5NjgxNzUxMTg2MjAiLCJjb2RlIjoiQVFBNmZwV01MTU9Lcm55aS1jYjJFS0p1YlpsY0FBS3VLWVZWU212b3lmOFlVX19oV1JXMEVDSVN3M3ctVUdrb1N1UW41SXNUODVJMWJKSzlPZnNMc3NxdmQ2dkF0Z3l6bzk0UlpSelJjRk5ZNFpUWjBSWnZ5VmVwSWpudDdMMWI2STFQVVdGX0lhb3dvRWhrcVNJSEFtU2M5U245WFYxaE1paTF6SnRUNWc0a1hDY0xrRWNIUm42LWxnZENBWkhEU2ZHNXVpeTFTLXVsbEJ4XzlzX3Q1UjhKbGxXNDR5LVY5b0RwZWFfX3NFM1R3cDMxbm5EWXJzalluZkE5RXFsZURzMTItbng5MW9rME5pT0JpRTNsdHZqNUs0V015ZFpWTTBsSXRhaXNjY0ZfaWplSmhNM3NueHhQUmVVclQ5aDVJbmZIeGgwWUNNQUp3aDF1YTRWOXYtcUwiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYxMjQ0Nzg2N30"
                userID: "10158968175118620"
                __proto__: Object
                status: "connected"
            }
            status變為connected代表有連結過，重新整理下次登入依舊會是connected
            */
        },{scope:'public_profile,email'})
        //第二個參數{scope:''}，可以設定你大頭照外，還要跟使用者要什麼資訊，如email
    }

    const handleFBLogout = () => {
        window.FB.logout(res=>{
            setRes(res);//觸發重跑一次App.js
        });
        //此處會印出{authResponse:null,status:"unknown"}
    }

    /*
        useRouteMatch是React Router的hook，如果頁面匹配了參數內的url路徑，則會回傳一個物件，這個hook是用來協助判斷route在第幾頁。
        {path: "/login", url: "/login", isExact: true, params: {…}}
    */ 
    if(res.status !== 'connected' && !isAtLogin)//如果isAtLogin已經
        return <Redirect to="/login"/>;

    return (
        <div className = "app">
            <Switch>
                <Route path="/" exact>
                    {res.status !== 'connected'?<Redirect to="/todos"/>:<Redirect to="/login"/>}
                </Route>
                <Route path='/todos'>
                    <TodoApp handleFBLogout={handleFBLogout}/>
                </Route>
                <Route path='/login'>
                    <Login handleFBLogin={handleFBLogin} status = {res.status}/>
                </Route>
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