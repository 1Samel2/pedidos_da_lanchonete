import React, { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import OrderDePedidos from '../../Components/ContainerFilha'

import H1 from '../../Components/Title';

import ButtonPedido from '../../Components/Button'

import Hamburguer from '../../assets/burger.svg'

import axios from 'axios'

import { Container,  Img, LabelP, InputPedido,} from './styles';

function Home() {

    const navigate = useNavigate()
    const [listaDePedidos, setListaDePedidos] = useState([]);
    const inputPedido = useRef();
    const inputName = useRef();


    async function addNewPedido() {
        const { data: newRequest } = await axios.post("http://localhost:3001/order",
            { order: inputPedido.current.value, clienteName: inputName.current.value })

        setListaDePedidos([...listaDePedidos, newRequest])

        navigate('/pedidos')

    }

    return (

        <Container>
            <OrderDePedidos>

                <Img src={Hamburguer} />

                <H1>Faça seu pedido!</H1>
                <LabelP>Seu pedido</LabelP>

                <InputPedido ref={inputPedido} placeholder="Digite o nome do prato" />

                <LabelP>Nome</LabelP>

                <InputPedido ref={inputName} placeholder="Digite o nome do prato" />

                <ButtonPedido onClick={addNewPedido} >Novo Pedido</ButtonPedido>
            </OrderDePedidos>
        </Container >

    )
}

export default Home