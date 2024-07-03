import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { StyledListDetailWrap, StyledButtonWrap, StyledDetailWrap, StyledTextWrap, StyledCloseButton, StyledLine } from './StyledListDetail';

function ListDetail() {
    const {id} = useParams();
    const detailTodo = useSelector(state => state.todoReducer.find(e => e.id === +id))
    useEffect(() => {}, [detailTodo, id]);
    return (
        <StyledListDetailWrap>
            <StyledButtonWrap>
                <Link to="/"><StyledCloseButton>x</StyledCloseButton></Link>
            </StyledButtonWrap>
            <StyledDetailWrap>
                <h1>{detailTodo.title}</h1>
                <p>{detailTodo.id}</p>
                <StyledLine />
                <StyledTextWrap>
                    <h3>{detailTodo.text}</h3>
                </StyledTextWrap>
            </StyledDetailWrap>
        </StyledListDetailWrap>
    )
}

export default ListDetail