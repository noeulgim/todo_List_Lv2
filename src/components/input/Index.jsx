import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todo';
import {InputListWrapper, StInput, StLabel, StLabelSpan} from './StyledInput';

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
    <InputListWrapper>
      <div className="inputWrap">
        <StLabel>
          <StLabelSpan>제목</StLabelSpan>
          <StInput name="title" value={input.title} onChange={onInputChangeHandler} required />
        </StLabel>
        <StLabel>
          <StLabelSpan>내용</StLabelSpan>
          <StInput name="text" value={input.text} onChange={onInputChangeHandler} required />
        </StLabel>
      </div>
      <button onClick={ClickAddHandler}>추가하기</button>
    </InputListWrapper>
  );
};

export default InputForm;
