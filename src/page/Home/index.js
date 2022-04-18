import React from 'react';

import axios from 'axios'; /* sempre instalar o yarn add axios para conectar ao back-end */

import ImageCarry from '../../assets/burger.svg';

import Trash from '../../assets/trash.svg';

import {
    Container, ContainerPedido, Img, H1, FaçaSeuPedido,
    InputPedido, ButtonPedido, CaixaDePedidos, Pedido
} from './styles';

function Home() {

    const listaDePedido = [{ id: Math.random(), order: "Sorvete", clienteName: "Samuel" }
    ]
    console.log(listaDePedido);

    return (

        <Container>
            <ContainerPedido>
                <Img src={ImageCarry} alt="" />

                <H1>Faça seu pedido!</H1>

                <FaçaSeuPedido>Pedido</FaçaSeuPedido>

                <InputPedido placeholder="1 Coca-Cola, 1-X Salada" />

                <FaçaSeuPedido>Nome do Cliente</FaçaSeuPedido>
                <InputPedido placeholder="Steve Jobs" />

                <ButtonPedido  >Novo Pedido</ButtonPedido>

                <CaixaDePedidos>
                    <ul>
                    {listaDePedido.map((pedido) => (

                            <Pedido key={pedido.id} >

                                <p>{pedido.pedido}</p>  <p className="nameP" >{pedido.name}</p>
                                
                                  <button> <img src={Trash} /> </button> 
                            </Pedido>
                        ))}
                    </ul>

                </CaixaDePedidos>

            </ContainerPedido>
        </Container>

    );
}

export default Home