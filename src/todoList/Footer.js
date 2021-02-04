import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:space-between;
`

const LogoutButton = styled.button`
    font-size:14px;
    font-weight:400;
    margin:2rem 0 1rem 0;
    &:hover{
        text-decoration:underline;
    }
`

const Footer =({things,handleFBLogout})=>(
    <footer>
        <Container>
            <p>剩餘項目: {things}</p>
            <LogoutButton className="btn-reset" onClick={handleFBLogout}>登出</LogoutButton>  
        </Container>
    </footer>
)

export default Footer;