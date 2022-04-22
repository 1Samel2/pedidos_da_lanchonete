import React from 'react';

import Hamburguer from '../../assets/burger.svg'

import {Container, ContainerPedido, Img, H1, LabelP, InputPedido, ButtonPedido} from './styles';

function home() {

    function addNewPedido(){
        alert('Pedido adicionado com sucesso!')
    }

    return(

        <Container>
            <ContainerPedido>
                <Img src={Hamburguer}/>
                <H1>Olá</H1>
                <LabelP>Seu pedido</LabelP>
                <InputPedido placeholder="Digite o nome do prato"/>
                <LabelP>Nome</LabelP>
                <InputPedido placeholder="Digite o nome do prato"/>
                <ButtonPedido onClick={addNewPedido} >Adicionar</ButtonPedido>
            </ContainerPedido>
        </Container>

    )
}

export default home