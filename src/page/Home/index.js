import React, { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import Hamburguer from '../../assets/burger.svg'

import Trash from '../../assets/trash.svg'

import axios from 'axios'

import { Container, ContainerPedido, Img, H1, LabelP, InputPedido, ButtonPedido, CaixaDePedidos, Pedido } from './styles';

function Home() {

    const navigate = useNavigate()
    const [listaDePedidos, setListaDePedidos] = useState([]);
    const inputPedido = useRef();
    const inputName = useRef();


 async function addNewPedido() {
        const {data: newRequest} = await axios.post("http://localhost:3001/order",
         {order:inputPedido.current.value, clienteName:inputName.current.value})

        setListaDePedidos([...listaDePedidos, newRequest])

        navigate('/pedidos')

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
            </ContainerPedido>
        </Container>

    )
}

export default Home