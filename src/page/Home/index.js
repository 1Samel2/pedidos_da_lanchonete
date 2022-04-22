import React from 'react';

import Hamburguer from '../../assets/burger.svg'

import {Container, ContainerPedido, Img, H1, LabelP, InputPedido, ButtonPedido} from './styles';

function home() {



    function addNewPedido(){
        alert('Pedido adicionado com sucesso!');
    }


    return( 
        <Container>
        <ContainerPedido>
        <Img src={Hamburguer}/>
        <H1>Faça seu pedido</H1>
        <LabelP>Pedido</LabelP>
        <InputPedido placeholder="Digite seu pedido"/>
        <LabelP>Nome do cliente</LabelP>
        <InputPedido placeholder="Digite seu nome"/>
        <ButtonPedido onClick={addNewPedido} >Novo Pedido</ButtonPedido>




        </ContainerPedido>
        </Container>

    )
}

export default home