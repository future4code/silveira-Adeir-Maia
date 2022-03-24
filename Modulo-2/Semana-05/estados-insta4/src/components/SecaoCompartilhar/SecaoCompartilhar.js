import React, { Component } from "react";
import styled from "styled-components";
import face from '../../img/face.png'
import insta from '../../img/instagran.png'
import twiter from '../../img/twiter.png'

const CompenenteCompartilhar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`
const IconeRedeSocial = styled.img`
    width: 20px;
    height: 20px;
`
const ContainerRedeSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const MegaContainerRedeSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SuperContainerRedeSocial = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 30px;
`
const SecaoCompartilhou = styled.div`
    height: 50px;
    text-align: center;
`
export class SecaoCompartilhar extends Component {
    state = {
        compartilhado: false,
        redeSocial: ""
    }
    compartilhouFace = () => {
        if (this.state.compartilhado === false) this.setState({ compartilhado: !this.state.compartilhado })
        this.setState({ redeSocial: 'Facebook' })
    }
    compartilhouTwiter = () => {
        if (this.state.compartilhado === false) this.setState({ compartilhado: !this.state.compartilhado })
        this.setState({ redeSocial: 'Twiter' })
    }
    compartilhouInsta = () => {
        if (this.state.compartilhado === false) this.setState({ compartilhado: !this.state.compartilhado })
        this.setState({ redeSocial: 'Instagran' })
    }
    render() {
        let ComponenteCopartilhou
        if (this.state.compartilhado) {
            ComponenteCopartilhou = <SecaoCompartilhou>
                <p>O post foi compartilhado no {this.state.redeSocial}.</p>
            </SecaoCompartilhou>
        }
        return (
            <>
                <CompenenteCompartilhar>
                    <MegaContainerRedeSocial>
                        <p>compartilhar com:</p>
                        <SuperContainerRedeSocial>
                            <ContainerRedeSocial>
                                <IconeRedeSocial src={face} alt='icone do facebook' onClick={this.compartilhouFace} />
                                <span>Facebook</span>
                            </ContainerRedeSocial>
                            <ContainerRedeSocial>
                                <IconeRedeSocial src={twiter} alt='icone do twiter' onClick={this.compartilhouTwiter} />
                                <span>Twiter</span>
                            </ContainerRedeSocial>
                            <ContainerRedeSocial>
                                <IconeRedeSocial src={insta} alt='icone do instagran' onClick={this.compartilhouInsta} />
                                <span>instagran</span>
                            </ContainerRedeSocial>
                        </SuperContainerRedeSocial>
                    </MegaContainerRedeSocial>
                </CompenenteCompartilhar>
                {ComponenteCopartilhou}
            </>
        )
    }
}