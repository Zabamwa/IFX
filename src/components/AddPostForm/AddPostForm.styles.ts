import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #252020de;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & label {
    color: black;
  }
  & input {
    background: white;
    color: black;
  }
  & textarea {
    background: white;
    color: black;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;
