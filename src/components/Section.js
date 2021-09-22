import styled from "styled-components"

function Section({title, description, Backgroundimg, leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImage={Backgroundimg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>

            {/* BUTTONS AND DOWN ARROW */}
            <Buttons>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                {rightBtnText &&  <RightButton>{rightBtnText}</RightButton>}
               
            </ButtonGroup>
            <DownArrow src="images/down-arrow.svg"/>
            </Buttons>

           
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
width: 100vw;
scroll-snap-align: start;
height: 100vh;
display:flex;
flex-direction:column;

background-image: ${props=> `url("images/${props.bgImage}")`};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
justify-content: space-between;
align-items:center;
object-fit:contain;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:50px;

@media (max-width:768px){
    flex-direction: column;
}
`
    
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
color: white;
height: 40px;
width:256px;
display: flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.8;
text-transform: uppercase;
font-size:12px;
cursor:pointer;
transition:.2s ease-out;
margin: 8px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.08);
    transition:.2s ease-out;
}
`
const RightButton = styled(LeftButton)`
background:white;
color:black;
opacity:0.65;
`

const DownArrow = styled.img`
height:40px;
animation:animateDown 1.5s infinite ;
margin-left:45%;
margin-bottom:20px;

`

const Buttons = styled.div``