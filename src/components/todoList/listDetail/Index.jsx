import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { ListDetailWrap, ButtonWrap, DetailWrap, TextWrap, StCloseButton, Line } from './StyledListDetail';

function ListDetail() {
    const {id} = useParams();
    const detailTodo = useSelector(state => state.todoReducer.find(e => e.id === +id))
    useEffect(() => {}, [detailTodo, id]);
    return (
        <ListDetailWrap>
            <ButtonWrap>
                <Link to="/"><StCloseButton>x</StCloseButton></Link>
            </ButtonWrap>
            <DetailWrap>
                <h1>{detailTodo.title}</h1>
                <p>{detailTodo.id}</p>
                <Line />
                <TextWrap>
                    <h3>{detailTodo.text}</h3>
                </TextWrap>
            </DetailWrap>
        </ListDetailWrap>
    )
}

export default ListDetail