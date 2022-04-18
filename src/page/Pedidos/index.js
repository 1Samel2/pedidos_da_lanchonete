import React from 'react';


import ImageCarry from '../../assets/carryBag.svg';

import { Container, ContainerPedido, Img, H1, CaixaDePedidos,  ButtonPedido } from './styles';

function Home() {
    return (

        <Container>
            <ContainerPedido>
                <Img src={ImageCarry} alt="" />

                <H1>Pedidos!</H1>
                <CaixaDePedidos>

                    
                </CaixaDePedidos>
                
              
                <ButtonPedido>Novo Pedido</ButtonPedido>

            </ContainerPedido>
        </Container>

    );
}

export default Home