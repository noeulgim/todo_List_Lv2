import { Link } from "react-router-dom";
import { useEffect } from "react";
import { StyledListBoxWrap, StyledListBoxWrapper, StyledDeleteButton, StyledDoneButton } from "./StyledListBox";

const ListBox = ({list, ClickIsDoneHandler, ClickDeleteHandler, isDoneStatus, title}) => {
    useEffect(() => {},[list]);
    return(
        <StyledListBoxWrapper>
        <h2>{title}</h2>
        {list.map((list)=> list.title && list.text && list.isDone === isDoneStatus && (
          <StyledListBoxWrap key={list.id}>
              <Link to={`/Detail/${list.id}`}>
              <div className="listBox" >
                <h3>{list.title}</h3>
                <p>{list.text}</p>
              </div>
              <div className="btnBox">
                <StyledDeleteButton onClick={(e) => ClickDeleteHandler(e,list.id)}>삭제하기</StyledDeleteButton>
                <StyledDoneButton onClick={(e) => ClickIsDoneHandler(e,list.id)}>{isDoneStatus ? '취소' : '완료'}</StyledDoneButton>
              </div>
            </Link>
            </ StyledListBoxWrap>
          ))}
      </StyledListBoxWrapper>
    );
}

export default ListBox;