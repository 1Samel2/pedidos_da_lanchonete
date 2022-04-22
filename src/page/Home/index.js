import React, {useState} from 'react';

import Hamburguer from '../../assets/burger.svg'

import {Container, ContainerPedido, Img, H1, LabelP, InputPedido, ButtonPedido} from './styles';

function home() {



<<<<<<< HEAD
    function addNewPedido(){
        alert('Pedido adicionado com sucesso!');
    }
=======
      const [listaDePedido, setListaDePedido] = useState([]);

    function addNewOrder(){
        
         setListaDePedido([{id: Math.random(), order:"sanduiche", clienteName:"samuel"}]) 


    } 


>>>>>>> 184d0807c2699b5905b53d40e989269be73bd33f


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




<<<<<<< HEAD
        </ContainerPedido>
=======
                <FaçaSeuPedido>Nome do Cliente</FaçaSeuPedido>
                <InputPedido placeholder="Steve Jobs" />

                <ButtonPedido  onClick={addNewOrder}  >Novo Pedido</ButtonPedido>

                <CaixaDePedidos>
                    <ul>
                        {listaDePedido.map((pedido) => (
                        <Pedido key={pedido.id}>

                                <p> {pedido.order} </p>  <button> <img src={Trash} /> </button> <p> {pedido.clienteName} </p>  
                                
                        </Pedido>
                        ))}
                    </ul>

                </CaixaDePedidos>

            </ContainerPedido>
>>>>>>> 184d0807c2699b5905b53d40e989269be73bd33f
        </Container>

    )
}

export default home