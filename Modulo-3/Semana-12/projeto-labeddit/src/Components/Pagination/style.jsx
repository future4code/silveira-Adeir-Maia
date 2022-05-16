import styled from "styled-components";

export const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    visibility: ${({ loading }) => loading ? 'hidden' : 'visible'};
`

export const PaginationBar = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    list-style: none;
    padding: 0px;
`
export const PageButton = styled.button`
    font-size: 18px;
    border: none;
    border-radius: 5px;
    padding: 7px;
    background-color: #F9B24E;
    color: black;
    background-color: ${({ selected }) => selected ? '#FF6488' : '#F9B24E'};
`
