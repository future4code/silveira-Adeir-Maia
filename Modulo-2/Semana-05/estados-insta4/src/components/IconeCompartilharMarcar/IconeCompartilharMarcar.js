import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
    
`

export let IconeMarcarCompartilhar = (props) => {
    return (
        <IconContainer>
            <IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
            <IconImage alt={'Icone'} src={props.icone1} onClick={props.onclickIcone1} />
        </IconContainer>
    )
}
