import styled from 'styled-components'

// Style Signin Component
export const HeaderContainer = styled.div`
  background-color: #fff;
  .image__login {
    margin-bottom: 25px;
  }

  .signin__first {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 200.104px - 25px);
    padding: 0 20px;
    .signin__link {
      text-align: center;
      p {
        margin: 0px;
        line-height: 30px;
        color: #139af7;
        font-weight: 600;
        a {
          text-decoration: none;
          color: #139af7;
          font-weight: 600;
        }
      }
    }
  }
  .signin__second {
    padding: 10px 0;
    text-align: center;

    .register__party {
      position: relative;
      padding: 15px 0;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        right: 40px;
        top: 56%;
        transform: translateY(-50%);
        background: #000;
        height: 1px;
        width: 100px;
      }

      &::before {
        content: '';
        position: absolute;
        top: 56%;
        left: 40px;
        transform: translateY(-50%);
        background: #000;
        height: 1px;
        width: 100px;
        /* background-color: #fff; */
      }
      span {
        color: #ff0;
        font-size: 17px;
      }
    }

    .btn__register {
      padding: 15px 0;

      a {
        position: relative;
        padding: 6px 93px;
        background-color: #1877f2;
        border: 1px solid #1877f2;
        border-radius: 6px;
        color: #f2eded;
        font-size: 16px;
        text-decoration: none;
        font-weight: 600;

        @media (max-width: 370px) {
          padding: 6px 93px;
        }
      }
    }
  }
`
export const Form = styled.form`
  width: 100%;
  .form__group {
    input[type='text'] {
      position: relative;
      left: -2px;
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
    input[type='password'] {
      position: relative;
      left: -2px;
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
  position: relative;
  left: -2px;
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
