import { Link } from "react-router-dom";
import { StyledListBoxWrap, StyledListBoxWrapper, StyledDeleteButton, StyledDoneButton } from "./StyledListBox";
import PropTypes from 'prop-types';

const ListBox = ({list, ClickIsDoneHandler, ClickDeleteHandler, isDoneStatus, title}) => {
    return(
        <StyledListBoxWrapper>
        <h2>{title}</h2>
        {list.map((list)=> list.title && list.text && list.isDone === isDoneStatus && (
          <StyledListBoxWrap key={list.id}>
              <Link to={`/Detail/${list.id}`}>
              <div>
                <h3>{list.title}</h3>
                <p>{list.text}</p>
              </div>
              <div>
                <StyledDeleteButton onClick={(e) => ClickDeleteHandler(e,list.id)}>삭제하기</StyledDeleteButton>
                <StyledDoneButton onClick={(e) => ClickIsDoneHandler(e,list.id)}>{isDoneStatus ? '취소' : '완료'}</StyledDoneButton>
              </div>
            </Link>
            </ StyledListBoxWrap>
          ))}
      </StyledListBoxWrapper>
    );
}
ListBox.propTypes = {
    list: PropTypes.array.isRequired,
    ClickIsDoneHandler: PropTypes.func.isRequired, 
    ClickDeleteHandler: PropTypes.func.isRequired,
    isDoneStatus: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
}
export default ListBox;