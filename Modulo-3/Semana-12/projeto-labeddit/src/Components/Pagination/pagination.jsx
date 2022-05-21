import React, { useState } from "react";
import { ContainerPagination, PaginationBar, PageButton } from "./style";

// fonte: Canal do Youtube Vinicius Dacal https://www.youtube.com/watch?v=v91BLoapVDw

/* => Limit = total de itens que sera retornado em uma requisição
=> total = numero total de item que a Api tem, usado para calcular o total de páginas, a LabEddit não forneçe isso, então 
será setado manualmente
=> offeset = é um número total de intens das paginas anteriores, pg 0 = 0, pg 1 = 20, pg 2 = 40, pg 3 = 60... supondo que 
cada pagina monstre 20 itens
*/

const MaxButtons = 5
// O botão da página atual sempre tentará ficar no Meio e terá as 3 paginas anteriores e as 3 sucessoas, além de dois botões 
// anterior e proxima nas pontas, totalizando 9 botões
const MaxLeftButtons = (MaxButtons - 1) / 2
// Haverá no máximo 4 botões na esquerda

export const Pagination = ({ limit, total, setCurentPage, loading }) => {
    const [offset, setOffset] = useState(0)
    const curentPage = offset ? (offset / limit) + 1 : 1
    /*Ex: pag 3 = offset(40) / limit(20) = 2+1 = 3. Se o offset for 0 a pagina é 1 */
    const totalPages = Math.ceil(total / limit)
    // O número total de páginas é o total de intens da Api divido pelo numero de intens que é monstrado em cada pagina. Usamos o 
    // Math.ceil para arredondar para cima caso não dê um número inteiro, o resto ficará na última pagia
    const maxFirst = Math.max(totalPages - (MaxButtons - 1), 1)
    const firtButton = Math.min(Math.max(curentPage - MaxLeftButtons, 1), maxFirst)
    // O primero botão será a página atual - 3. Math.Max escolhe o maior entre 2 numero passados, se o primeiro botão for menor 
    // que 1 o Math.max escolherá 1.

    setCurentPage(curentPage)

    const onPageChange = button => setOffset((button - 1) * limit)

    const goTofirstPage = () => setOffset(0 * limit)

    const goToFinalPage = () => setOffset((totalPages) * limit)

    return (
        <ContainerPagination loading={loading}>
            <PaginationBar>
                <li>
                    <PageButton
                        onClick={goTofirstPage}
                        disabled={curentPage === 1}
                        selected={curentPage === 1}
                    >Primeira</PageButton>
                </li>
                {Array.from({ length: Math.min(MaxButtons, totalPages) })
                    .map((_, index) => index + firtButton)
                    .map((button) => (
                        <li key={button}>
                            <PageButton
                                onClick={() => onPageChange(button)}
                                disabled={button === curentPage}
                                selected={button === curentPage}
                            >{button}
                            </PageButton>
                        </li>
                    ))}
                <li>
                    <PageButton
                        onClick={goToFinalPage}
                        disabled={curentPage - 1 === totalPages}
                        selected={curentPage - 1 === totalPages}
                    >Última</PageButton>
                </li>
            </PaginationBar>
        </ContainerPagination>

    )
}


