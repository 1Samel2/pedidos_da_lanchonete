import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Hamburguer from '../../assets/burger.svg'

import Trash from '../../assets/trash.svg'

import axios from 'axios'

import { Container, ContainerPedido, Img, H1, ButtonPedido, CaixaDePedidos, Pedido } from './styles';

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
            <ContainerPedido>
                <Img src={Hamburguer} />
                <H1>Olá</H1>

                <ul>
                    {listaDePedidos.map(orderPedidos => (
                        <Pedido key={orderPedidos.id}>

                            <CaixaDePedidos>
                                <p>{orderPedidos.order} </p>  <p className="nameP">{orderPedidos.clienteName} </p>
                                <button onClick={() => deletePedido(orderPedidos.id)}
                                ><img src={Trash} /></button>
                            </CaixaDePedidos>

                        </Pedido>
                    ))}
                </ul>
                <ButtonPedido onClick={handleClick} >Adicionar</ButtonPedido>

            </ContainerPedido>
        </Container>

    )
}

export default Pedidos