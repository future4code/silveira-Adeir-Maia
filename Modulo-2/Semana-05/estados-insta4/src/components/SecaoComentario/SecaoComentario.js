import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	flex-direction: column;
	div{
		display: flex;
	}
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
const ComentariosPostadosContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	div{
		border: 1px solid black;
		margin: 5px;
		width: 290px;
	}
`
export class SecaoComentario extends Component {
	state = {
		arrayComentarios: [],
		cometario: ''
	}
	onChangeComentario = (event) => {
		this.setState({ cometario: event.target.value })
	}
	postarComentario = () => {
		this.setState({ arrayComentarios: [...this.state.arrayComentarios, this.state.cometario] })
		this.setState({ cometario: '' })
	}

	render() {
		const ComentariosPostados = this.state.arrayComentarios.map(e => {
			return (
				<ComentariosPostadosContainer>
					<div>
						<span>{e}</span>
					</div>
				</ComentariosPostadosContainer>
			)
		})

		return (
			<CommentContainer>
				<div>
					<InputComentario
						placeholder={'Comentário'}
						value={this.state.cometario}
						onChange={this.onChangeComentario}
					/>
					<button onClick={this.postarComentario}>Enviar</button>
				</div>

				{ComentariosPostados}
			</CommentContainer>
		)
	}
}

