import styled from 'styled-components'

import Hamburguer from '../../assets/hamburguer.jpg'

export const Container = styled.div`
    
background: url("${Hamburguer}");
min-height:100vh;
height: 100%;

`;

export const ContainerPedido = styled.div`
background: black;
display: flex;
flex-direction: column;
align-items: center; 
width: 414px;
height: 658px;
min-height:100vh;
height: 100%;


`;

export const Img = styled.img`
width: 200px;
margin-top: 11px; 
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #FFFFFF;
margin-top: 35px;
`;

export const FaçaSeuPedido = styled.p`

font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #EEEEEE;
margin-top: 35px;
margin-right: 150px;

`;

export const InputPedido = styled.input`

width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
padding-left: 25px; 


`;

export const ButtonPedido = styled.button`

background: #D93856;
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
`;
