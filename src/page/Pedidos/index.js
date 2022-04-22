import React, {useState, useRef} from 'react';

import CarryBag from '../../assets/carryBag.svg'

import Trash from '../../assets/trash.svg'

import { Container, ContainerPedido, Img, H1, ButtonPedido, CaixaDePedidos, Pedido } from './styles';

function Home() {




    return (

        <Container>
            <ContainerPedido>
                <Img src={CarryBag} />
                <H1>Olá</H1>
                     
                        <ul>
                        {listaDePedidos.map(orderPedidos => (
                            <Pedido key={orderPedidos.id}>
                                
                            <CaixaDePedidos>
                               <p>orderPedidos.order</p> <button ><img src={Trash} /></button>  <p className="nameP" >orderPedidos.clienteName</p>
                              </CaixaDePedidos>

                            </Pedido>
                              ))}
                        </ul>                  


                        <ButtonPedido >Adicionar</ButtonPedido>     
                    
            </ContainerPedido>
        </Container>

    )
}

export default Home