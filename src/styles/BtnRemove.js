import styled from "styled-components";

// RemoveBtn Component
// const PageUp = keyframes`
//   from {
//     transform: translate(0%, 100%);
//   }

//   to {
//     transform: translate(0%, 0%);
//   }
// `
// const PageDown = keyframes`
//   from {
//     transform: translate(0%, 0%);
//   }

//   to {
//     transform: translate(0%, 100%);
//   }
// `
export const PageRemove = styled.div`

.grid-btn {
    position: fixed;
    width: 350px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.12);
    margin: 0 auto;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.4s linear;
    z-index: 300;

    .close {
      position: relative;
      background-color: #fff;
      padding: 20px 13px;
      margin: 25px auto;
      width: 15px;
      border-radius: 50%;
      cursor: pointer;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
      }
    }
  
    .card-remove {
      position: relative;
      top: 200px;
      height: 100%;
  
      .container-remove {
        margin-top: 7px;
        border-radius: 20px 20px 0 0;
        background-color: #fff;
        height: 100%;
  
        .btn-remove {
          padding: 14px;
          border-bottom: 1px solid;
          display: flex;
          cursor: pointer;
        }
      }
    }
  }

  .show-grid {
    transform: translateY(0%);
      transition: all 0.4s linear;
      opacity: 1;
  }
  .color-grid {
    
  }

`
export const HrBar = styled.div`
  width: 13%;
  height: 7px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #fff;
`