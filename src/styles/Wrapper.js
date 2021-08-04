import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
height: 100vh;
justify-content: space-between;
flex-direction: column;

.col-fr {
  margin-top: 100px;
  
  .title {
    text-align: center;
    padding: 0 30px;
    color: #1877f2;
    font-weight: 600;

  }

  .text {
    text-align: center;
    padding: 0 25px;
    font-size: 13px;
  }

  .btn_group {
    padding: 20px 0;
    a {
      position: relative;
      padding: 6px 130px;
      background-color: #1877f2;
      border: 1px solid #1877f2;
      border-radius: 6px;
      color: #f2eded;
      font-size: 14px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease-in;

      @media (max-width: 370px) {
        padding: 6px 93px;
      }

      &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #0a59c0;
        border: 1px solid #0a59c0;
      }
    }
  }
}
`