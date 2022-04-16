import React from 'react';


import ImageCarry from '../../assets/burger.svg';

import { Container, ContainerPedido, Img, H1, FaçaSeuPedido, InputPedido, ButtonPedido } from './styles';

function Home() {
    return (

        <Container>
            <ContainerPedido>
                <Img src={ImageCarry} alt="" />

                <H1>Faça seu pedido</H1>

                <FaçaSeuPedido>Pedido</FaçaSeuPedido>

                <InputPedido placeholder="1 Coca-Cola, 1-X Salada" />

                <FaçaSeuPedido>Nome do Cliente</FaçaSeuPedido>
                <InputPedido placeholder="Steve Jobs"/>

                <ButtonPedido>Novo Pedido</ButtonPedido>

            </ContainerPedido>
        </Container>

    );
}

export default Home