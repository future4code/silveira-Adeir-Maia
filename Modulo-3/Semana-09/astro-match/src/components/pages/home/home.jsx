import React, { useState, useEffect } from "react"
import { getProfiles, choosePerson } from "../../service/service"
import { PhotoProfile, ContainerHome, ContainerProfile, AplicationTitle, Paragrafo, NavContainer } from "./style"
import Match from '../../img/communication.png'
import Heart from '../../img/give-heart.png'
import Negate from '../../img/x.png'

const Home = (props) => {
    const [profile, setProfile] = useState({})

    useEffect(() => getProfiles(setProfile), [])

    const match = (choiceBolean) => {
        getProfiles(setProfile)
        const body = {
            choice: choiceBolean,
            id: profile.id,
        }
        choosePerson(body)
    }

    return (
        <>
            <ContainerHome>
                <ContainerProfile>
                    <NavContainer>
                        <AplicationTitle>Astro<span>Match</span></AplicationTitle>
                        <button onClick={props.goToMatchs}><img src={Match} alt='IconeDoMatch' /></button>
                    </NavContainer>
                    {profile === null ? <Paragrafo>Você ja viu todos os perfis disponiveis, veja seus matchs e se quiser reinicie o app.</Paragrafo> :
                        profile.name ?
                            <>
                                <div>
                                    <PhotoProfile src={profile.photo} alt="foto do perfil" />
                                    <div>
                                        <p>Name: {profile.name}</p>
                                        <p>Age: {profile.age}</p>
                                    </div>
                                    <p>{profile.bio}</p>
                                    <div>
                                        <button onClick={() => match(false)} ><img src={Negate} alt='IconeDeX' /></button>
                                        <button onClick={() => match(true)} ><img src={Heart} alt='IconeDeCoracao' /></button>
                                    </div>
                                </div>
                            </> :
                            <Paragrafo>carregando perfis</Paragrafo>}
                </ContainerProfile>
            </ContainerHome>
        </>
    )
}

export default Home