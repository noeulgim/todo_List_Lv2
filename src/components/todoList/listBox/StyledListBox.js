import styled from "styled-components";

export const ListBoxWrapper = styled.div`
  padding: 0 5%;
  text-align: left;
`;
export const ListBoxWrap = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5%;
  padding: 2%;
  margin: 1%;
  background: #f1f1f1;
  &:hover {
    background-color: #fff;
  }
`;
export const StDeleteButton = styled.button`
  border-color: red;
`
export const StDoneButton = styled.button`
  border-color: green;
`