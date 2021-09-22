import styled from "styled-components"

function Header() {
    return (
        <Container>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>

            {/* middle menu */}
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model Y</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:10vh;
position:fixed;
display: flex;
align-items:center;
padding: 0 20px;
top:0;
left:0;
right:0;
`

const Menu = styled.div`
display: flex;
align-items:center;
flex: 1;
justify-content: center;

p{
    font-weight: 600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
}
`