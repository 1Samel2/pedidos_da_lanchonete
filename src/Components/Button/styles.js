
import styled from 'styled-components'

export const ButtonPedido = styled.button`

background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14);' : '#D93856'};
width: 342px;
height: 64px;
border: none;
border-radius: 14px; 
color: #FFFFFF;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
margin-top: 35px;
cursor: pointer;
margin-left: 36px;

&:hover{
    opacity: 0.8;
}

`;