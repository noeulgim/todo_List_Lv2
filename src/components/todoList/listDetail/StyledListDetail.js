import styled from 'styled-components';

export const ListDetailWrap = styled.div`
    position: relative;
    background-color: rgb(223,229,194);
    margin: 10%;
    padding: 5%;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ButtonWrap = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-end;
`;
export const StCloseButton = styled.button`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 25px;
    text-decoration: none;
    &:hover {
        color: red;
    }
`;
export const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;
`
export const Line = styled.div`
    border-bottom: 1px dotted #9a9a9a;
    width: 100%;
    margin-bottom: 5%;
`;
export const TextWrap = styled.div`
    background-color: rgba(255, 255, 255, .7);
    border-radius: 10px;
    height: auto;
    padding: 10px;
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`