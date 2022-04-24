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
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    background: #D93844;
    }
`;


export const CaixaDePedidos = styled.div`
margin: 20px;
width: 342px;
height: 101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

`;

export const Pedido = styled.li`
padding-left: 17px;
list-style-type: none;


p{

padding-top: 18px;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF; 
margin-left: 20px;
}


.nameP{

font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
}


button{
    background: none;
    border: none;
    cursor: pointer;position: absolute;
    position: absolute;
    margin-left: 304px;
    margin-top: -40px;

}

`;