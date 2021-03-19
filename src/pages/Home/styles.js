import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BattleScreen = styled.div`
  width: 100%;
`;

export const Arsenal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;

  padding: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media(max-width: 580px) {
    width: 100%;
    padding: 8px;
    span {
      font-size: 18px;
      font-family: 'Fredoka One';
    }
  }
`;

export const BattleArena = styled.div`
  width: 100%;
  min-height: 400px;
  background: rgb(32, 32, 36);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  > div {
    padding: 24px;
    text-align: center;
  }

  span {
    font-size: 24px;
    text-align: center;
    font-family: 'Fredoka One';
  }

  @media(max-width: 580px) {
    padding: 16px;

    > div {
      padding: 8px;
    }

    span {
      font-size: 16px;
      font-family: 'Fredoka One';
    }
  }
`;

export const LoadingResult = styled.div`
  svg {
    animation: ${shake} 2s linear infinite;
    width: 100px !important;
    height: 100px !important;
  }
`;

export const ArcadeButton = styled.button`
  position: relative;
  color: #fff;
  text-decoration: none;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  font-family: 'Fredoka One', cursive;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0px 6px 0px ${(props) => darken(0.2, props.backgroundColor)}, 0px 9px 25px rgba(0,0,0,.7);
  border: 0;
  transition: background 200ms ease-in-out;
  text-transform: capitalize;

  svg {
    width: 35px;
    height: 35px;
  }

  > span {
    margin-top: 8px;
  }

  &:not(:disabled):hover {
    background: ${(props) => darken(0.2, props.backgroundColor)};
    box-shadow: 0px 6px 0px ${(props) => darken(0.4, props.backgroundColor)}, 0px 9px 25px rgba(0,0,0,.7);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active {
    box-shadow: 0px 3px 0px ${(props) => darken(0.2, props.backgroundColor)}, 0px 3px 6px rgba(0,0,0,.9);
    position: relative;
    top: 6px;
  }

  @media(max-width: 580px) {
    width: 60px;
    height: 60px;
    font-size: 14px;

    span {
      display: none;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media(max-width: 320px) {
    width: 50px;
    height: 50px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
