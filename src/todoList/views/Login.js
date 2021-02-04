import styled from 'styled-components';
import { Link,useHistory, Redirect } from 'react-router-dom';


const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Title =styled.h1`
    text-align:center;
    font-family:'Noto Sans TC',sans-serif;
    margin: 2rem 0;
`

const LoginButton = styled.button`
    background:#1877f2;
    color:white;
    min-width:200px;
    font-size:14px;
    font-weight:bold;
    outline:none;
    border:none;
    font-family:'Noto Sans TC',sans-serif;
    padding:6px 0;
    margin:2rem 0 1rem;
    &:hover{
        background:#385898;
    }
`;

const Login =({handleSetPage,goTodos,handleFBLogin,status})=>{
    console.log('status',status);
    if(status==='connected')
        return <Redirect to="/todos"/>
    return (
        <Container>
            <Title>登入 Todo</Title>
            <Link to='/todos'>
                <LoginButton onClick={handleFBLogin}>Facebook 登入</LoginButton>
            </Link>
        </Container>
    )
}

export default Login;