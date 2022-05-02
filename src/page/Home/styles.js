import styled from 'styled-components'

import Hamburguer from '../../assets/hamburguer.jpg'

export const Container = styled.div`
    
background: url("${Hamburguer}");
min-height:100vh;
height: 100%;
display: flex;
flex-direction: column; 
align-items: center;


`;



export const Img = styled.img`
margin-top: 11px; 
width: 342px;
margin-left: 36px;
`;


export const LabelP = styled.p`

font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-top: 35px;
margin-left: 56px;

`;

export const InputPedido = styled.input`

width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
margin-left: 36px;
color: white;
padding-left: 15px;
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