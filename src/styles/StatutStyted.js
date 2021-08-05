import styled from 'styled-components'

export const StatutContainer = styled.div`
  ${props => {
    if (props.public) {
      return `
      width: 100%;
      margin: 0 auto 10px auto;
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      background-color: #eee;
      `
    } else {
      return `
        width: 100%;
        margin: 5px auto;
        background-color: #ddd;
      `
    }
  }}

  .container-statut {
    width: 100%;
    background-color: #ffffff;
    margin: 5px auto;
    box-shadow: 0 0 1px 0.5px #ffffff;

    .col-st {
      width: 92%;
      margin: 5px auto;

      .rows-status {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;

        .power {
          position: relative;
          margin-top: 3px;
          right: 15px;
        }
      }

      .bloc-text {
        width: 100%;
        position: relative;
        display: flex;
      }
    }
  }
`
//Style statut Page
const Container = styled.div`
  ${props => {
    if (props.offline) {
      return `
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
      `
    } else {
      return `

        `
    }
  }}
`
export const StatutImage = styled.img`
  width: ${props => props.width};
`

export const Colgroup = styled.div`
  margin: 8px 0;
  position: relative;
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  border-radius: 50%;
  float: ${props => props.float};
`

export const BlocDown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  .deo {
    svg {
      font-size: 30px;
    }
    span {
      position: relative;
      float: right;
      margin-left: 5px;
      padding: 4px 0;
      font-weight: 500;
      font-size: 17px;
    }
  }
  .direct {
    svg {
      color: #c00a47;
    }
  }
  .tof {
    svg {
      color: #0ac065;
    }
  }
  .salon {
    svg {
      color: #960ac0;
    }
  }
`
export const Icon = styled.img`
  ${props => {
    if (props.right) {
      return `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: sans-serif;
      border-radius: 50%;
      font-weight: 900;
      color: #f00;
      `
    } else if (props.background) {
      return `
        width: 100%;
      `
    } else if (props.remove) {
      return `
        width: 25px;
        font-weight: bold;
        padding-right: 25px;
      `
    } else if (props.close) {
      return `
        position: absolute;
        width: 75%;
        left: 6.5px;
        bottom: 6px;
      `
    } else if (props.public) {
      return `
        width: 30px;
        font-weight: bold;
      `
    } else if (props.offline) {
      return `
        width: 100%;
      `
    } else {
      return `
        width: 30px;
        float: left;
      `
    }
  }}
`
export const Card = styled.div`
  width: 92%;
  margin: 10px auto;
  background-color: #fff;
`
export const TextStatus = styled.div`
  margin: 10px 5px;
  padding-bottom: 5px;
`
