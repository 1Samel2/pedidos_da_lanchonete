import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Hamburguer from '../../assets/carryBag.svg'

import OrderDePedidos from '../../Components/ContainerFilha'

import H1 from '../../Components/Title'

import ButtonPedido from '../../Components/Button'

import Trash from '../../assets/trash.svg'

import axios from 'axios'

import { Container, Img, CaixaDePedidos, Pedido, Button } from './styles';

function Pedidos() {


    const navigate = useNavigate()
    function handleClick() {
        navigate('/home')
        navigate()
    }

    const [listaDePedidos, setListaDePedidos] = useState([]);
    const inputPedido = useRef();
    const inputName = useRef();


    async function addNewUser() {

        const { data: newRequest } = await axios.post('http://localhost:3001/order', {
            order: inputPedido.current.value,
            clienteName: inputName.value,
        })
        setListaDePedidos([...listaDePedidos, newRequest])
    }

    useEffect(() => {
        async function fetchOrder() {
            const { data: newRequest } = await axios.get('http://localhost:3001/order')
            setListaDePedidos(newRequest)

        }
        fetchOrder()
    }, [])




    async function deletePedido(orderId) {
        await axios.delete(`http://localhost:3001/order${orderId}`)
        const newPedido = listaDePedidos.filter(order => order.id !== orderId)
        setListaDePedidos(newPedido)
    }


    function handleClick() {
        navigate('/')
        navigate(1)
    }

    return (

        <Container>
            <OrderDePedidos>
                <Img src={Hamburguer} alt="Hamburguer" />
                <H1>Pedidos</H1>


                <ul>

                    {listaDePedidos.map(orderPedidos => (
                        <Pedido key={orderPedidos.id}>

                            <CaixaDePedidos>
                                
                                    <p className="nomePedido" >{orderPedidos.order} </p>

                                    <Button onClick={() => deletePedido(orderPedidos.id)}>
                                        <img src={Trash} alt="lata-de-lixo" />
                                    </Button>

                                    <p><strong>{orderPedidos.clienteName}</strong> </p>
                                
                            </CaixaDePedidos>

                        </Pedido>

                    ))}

                </ul>



                <ButtonPedido isBack={true} onClick={handleClick}>Voltar</ButtonPedido>

            </OrderDePedidos>
        </Container>

    )
}

export default Pedidos