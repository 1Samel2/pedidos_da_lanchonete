import React, {useState, useRef} from 'react';

import Hamburguer from '../../assets/burger.svg'

import Trash from '../../assets/trash.svg'

import { Container, ContainerPedido, Img, H1, LabelP, InputPedido, ButtonPedido, CaixaDePedidos, Pedido } from './styles';

function Home() {

    const [listaDePedidos, setlistaDePedidos] = useState([]);
    const inputPedido = useRef();
    const inputName = useRef();


    function addNewPedido() {
       /*  alert('Pedido adicionado com sucesso!') */
        
        setlistaDePedidos([
            ...listaDePedidos, {
                id: Math.random(),
                order:inputPedido.current.value,
                clienteName: inputName.current.value 
    },])
}



    return (

        <Container>
            <ContainerPedido>
                <Img src={Hamburguer} />
                <H1>Olá</H1>
                <LabelP>Seu pedido</LabelP>
                
                <InputPedido ref={inputPedido} placeholder="Digite o nome do prato" />

                <LabelP>Nome</LabelP>

                <InputPedido ref={inputName} placeholder="Digite o nome do prato" />

                <ButtonPedido onClick={addNewPedido} >Adicionar</ButtonPedido>

                
                        
                        <ul>
                        {listaDePedidos.map(orderPedidos => (
                            <Pedido key={orderPedidos.id}>
                                
                            <CaixaDePedidos>
                               <p>orderPedidos.order</p> <button ><img src={Trash} /></button>  <p className="nameP" >orderPedidos.clienteName</p>
                              </CaixaDePedidos>

                            </Pedido>
                              ))}
                        </ul>                       
                    
            </ContainerPedido>
        </Container>

    )
}

export default Home