import React from 'react'

import { ButtonPedido} from './styles'


function Button ({children, ...props}){

    return <ButtonPedido {...props}>{children}</ButtonPedido>


}

export default Button