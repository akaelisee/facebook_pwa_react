import styled from "styled-components";

// Style Signin Component
export const HeaderContainer = styled.div`
  background-color: #fff;
  .image__login {
    margin-bottom: 25px;
  }
`
export const Form = styled.form`
    width: 100%;

  .form__login {
    width: 90%;
    margin: 0 auto;
  }
  .form__group {
    input[type="text"] {
      width: 100%;
      margin: 0px;
      padding-top: 8px;
      padding-bottom: 8px;
      border-bottom: transparent !important;
      border: 1px solid #aaaaaa;
      border-radius: 2px 2px 0 0;
      outline: none;
      font-size: 14px;
    }
    input[type="password"] {
      width: 100%;
      padding-top: 8px;
      padding-bottom: 8px;
      border: 1px solid #aaaaaa;
      border-radius: 0 0 2px 2px;
      outline: none;
      font-size: 14px;
    }
  }
`
export const BtnSubmit = styled.input`
  margin-top: 10px;
  width: calc(100% + 6px);
  padding: 7px 0;
  background-color: #1877f2;
  border: transparent;
  border-radius: 6px;
  color: #f2eded;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`