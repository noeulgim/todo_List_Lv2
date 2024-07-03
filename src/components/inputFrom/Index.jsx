import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todo';
import {StyledInputListWrapper, StyledInput, StyledLabel, StyledLabelSpan} from './StyledInput';

const InputForm = () => {
  const [input, setInput] = useState({ title: '', text: '' });

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const dispatch = useDispatch();
  
  const ClickAddHandler = () => {
    if (!input.title || !input.text) {
      alert('제목과 내용을 모두 입력해주세요.');
      return false;
    }
    const newTodo = { id: Date.now(), title: input.title, text: input.text, isDone: false };
    dispatch(addTodo(newTodo));
    setInput({ title: '', text: '' });
    return true;
  };

  return (
    <StyledInputListWrapper>
      <div className="inputWrap">
        <StyledLabel>
          <StyledLabelSpan>제목</StyledLabelSpan>
          <StyledInput name="title" value={input.title} onChange={onInputChangeHandler} required />
        </StyledLabel>
        <StyledLabel>
          <StyledLabelSpan>내용</StyledLabelSpan>
          <StyledInput name="text" value={input.text} onChange={onInputChangeHandler} required />
        </StyledLabel>
      </div>
      <button onClick={ClickAddHandler}>추가하기</button>
    </StyledInputListWrapper>
  );
};

export default InputForm;
