import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ListBoxWrap, ListBoxWrapper, StDeleteButton, StDoneButton } from "./StyledListBox";

const ListBox = ({list, ClickIsDoneHandler, ClickDeleteHandler, isDoneStatus, title}) => {
    useEffect(() => {},[list]);
    return(
        <ListBoxWrapper>
        <h2>{title}</h2>
        {list.map((list)=> list.title && list.text && list.isDone === isDoneStatus && (
          <ListBoxWrap key={list.id}>
              <Link to={`/Detail/${list.id}`}>
              <div className="listBox" >
                <h3>{list.title}</h3>
                <p>{list.text}</p>
              </div>
              <div className="btnBox">
                <StDeleteButton onClick={(e) => ClickDeleteHandler(e,list.id)}>삭제하기</StDeleteButton>
                <StDoneButton onClick={(e) => ClickIsDoneHandler(e,list.id)}>{isDoneStatus ? '취소' : '완료'}</StDoneButton>
              </div>
            </Link>
            </ ListBoxWrap>
          ))}
      </ListBoxWrapper>
    );
}

export default ListBox;