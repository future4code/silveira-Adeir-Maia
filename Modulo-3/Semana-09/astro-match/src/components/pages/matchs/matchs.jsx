import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMatches, clearProfiles } from "../../service/service";
import { PhotoProfile, CardProfile, ContainerProfiles, ContainerMatch, NavContainer, Paragrafo, AplicationTitle } from "./styles";
import SetaEsquerda from '../../img/seta-esquerda.png'
import Reset from '../../img/reset.png'


const Matchs = () => {
    const [matchsProflies, setMatchsProfiles] = useState([])

    useEffect(() => {
        getMatches(setMatchsProfiles)
    }, [])

    return (
        <ContainerMatch>
            <NavContainer>
                <AplicationTitle>Astro<span>Match</span></AplicationTitle>
                <div>
                    <button onClick={() => clearProfiles(setMatchsProfiles)}><img src={Reset} alt='LogoDeReset' /></button>
                    <div>
                        <Link to='/' ><img src={SetaEsquerda} alt='LogoVoltar' /></Link>
                    </div>
                </div>
            </NavContainer>
            {matchsProflies.length > 0 ?
                <ContainerProfiles>
                    {matchsProflies &&
                        matchsProflies.map(profile => {
                            return (
                                <CardProfile key={profile.id}>
                                    <PhotoProfile src={profile.photo} ></PhotoProfile>
                                    <p>{profile.name}</p>
                                </CardProfile>
                            )
                        })}
                </ContainerProfiles> :
                <ContainerProfiles>
                    <Paragrafo>Você não recebeu nenhum match, que pena! &#128557;</Paragrafo>
                </ContainerProfiles>}
        </ContainerMatch>
    )
}

export default Matchs