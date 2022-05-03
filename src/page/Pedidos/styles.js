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




export const CaixaDePedidos = styled.div`
margin-left: 36px;
width: 342px;
height: 111px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-top: 16px;



`;

export const Button = styled.button`
display: flex;
align-items: center;
background: none;
border: none;
margin-left:303px;
cursor: pointer;

`;

export const Pedido = styled.li`
list-style-type: none;


p{

font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-left:25px;
overflow-wrap: break-word;
}

.nomePedido{
    padding-top:10px;
}


`;


