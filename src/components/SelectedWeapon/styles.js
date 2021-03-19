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

export const LoadingResult = styled.div`
  svg {
    animation: ${shake} 2s linear infinite;
    width: 100px !important;
    height: 100px !important;
  }
`;

export const Weapon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.labelOnTop ? 'column-reverse' : 'column')};

    > span.weapon-label {
      font-size: 16px !important;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px dashed ${(props) => (props.weaponSelected ? '#8257e6' : 'rgb(55, 54, 60)')};
      border-radius: 5px;
      height: 150px;
      width: 150px;
      font-size: 16px;
      color: rgb(135, 134, 139);
      cursor: pointer;
      transition: border 0.2s ease 0s;
      margin: 16px;
      transform: ${(props) => (props.flipHandVertical ? 'scaleY(-1)' : 'none')};
    }

    svg {
      width: 100px !important;
      height: 100px !important;
    }

    @media(max-width: 580px) {
      > div {
        width: 100px;
        height: 100px;
      }

      svg {
        width: 80px !important;
        height: 80px !important;
      }
    }

    @media(max-width: 320px) {
      > div {
        width: 100px;
        height: 100px;
      }

      svg {
        width: 50px !important;
        height: 50px !important;
      }
    }
`;
