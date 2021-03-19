import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  FaRegHandLizard, FaRegHandSpock, FaRegHandScissors, FaRegHandRock, FaRegHandPaper,
} from 'react-icons/fa';
import isEmpty from 'lodash/isEmpty';

const BattleContext = createContext();

const BattleProvider = ({ children }) => {
  const arsenal = [
    {
      id: 1,
      weaponName: 'pedra',
      icon: <FaRegHandRock size={35} />,
      wins: [
        { weaponName: 'lagarto', howWins: 'esmaga' },
        { weaponName: 'tesoura', howWins: 'amassa' },
      ],
    },
    {
      id: 2,
      weaponName: 'papel',
      icon: <FaRegHandPaper size={35} />,
      wins: [
        { weaponName: 'pedra', howWins: 'cobre' },
        { weaponName: 'spock', howWins: 'refuta' },
      ],
    },
    {
      id: 3,
      weaponName: 'tesoura',
      icon: <FaRegHandScissors size={35} />,
      wins: [
        { weaponName: 'papel', howWins: 'corta' },
        { weaponName: 'lagarto', howWins: 'decapita' },
      ],
    },
    {
      id: 4,
      weaponName: 'lagarto',
      icon: <FaRegHandLizard size={35} />,
      wins: [
        { weaponName: 'spock', howWins: 'envenena' },
        { weaponName: 'papel', howWins: 'come' },
      ],
    },
    {
      id: 5,
      weaponName: 'spock',
      icon: <FaRegHandSpock size={35} />,
      wins: [
        { weaponName: 'tesoura', howWins: 'derrete' },
        { weaponName: 'pedra', howWins: 'vaporiza' },
      ],
    },
  ];

  const [weapons, setWeapons] = useState(arsenal);
  const [playerWeapon, setPlayerWeapon] = useState(null);
  const [computerWeapon, setComputerWeapon] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [resetingGame, setResetingGame] = useState(false);
  const [shakeHands, setShakeHands] = useState(false);

  const getRandomWeapon = () => {
    const arsenalWeapon = weapons[Math.floor(Math.random() * weapons.length)];

    return arsenalWeapon;
  };

  const resetGame = () => {
    setResetingGame(true);
    setTimeout(() => {
      setWinnerMessage('Reiniciando partida...');
      setTimeout(() => {
        setComputerWeapon(null);
        setPlayerWeapon(null);
        setWinnerMessage(null);
        setResetingGame(false);
      }, 1000);
    }, 2500);
  };

  const findWeapon = (arsenal, weaponToFind) => arsenal.find((win) => win.weaponName === weaponToFind);

  const battleFight = (player) => {
    setShakeHands(true);

    setTimeout(() => {
      setShakeHands(false);
      const computer = getRandomWeapon();
      setPlayerWeapon(player);
      setComputerWeapon(computer);

      if (player !== null) {
        const playerWin = findWeapon(player.wins, computer.weaponName);

        if (player.weaponName === computer.weaponName) {
          setWinnerMessage('Empate...');
        } else if (!isEmpty(playerWin)) {
          setWinnerMessage(`Você venceu! ${player.weaponName} ${playerWin.howWins} ${playerWin.weaponName}`);
        } else {
          const computerWin = findWeapon(computer.wins, player.weaponName);
          setWinnerMessage(`Computador venceu! ${computer.weaponName} ${computerWin.howWins} ${computerWin.weaponName}`);
        }
      }
      resetGame();
    }, 2000);
  };

  return (
    <BattleContext.Provider value={{
      weapons, winnerMessage, shakeHands, setShakeHands, battleFight, setPlayerWeapon, playerWeapon, computerWeapon, resetingGame,
    }}
    >
      {children}
    </BattleContext.Provider>
  );
};

function useBattle() {
  const context = useContext(BattleContext);

  if (!context) {
    throw new Error('useBattle need a BattleProvider');
  }
  return context;
}

export { BattleProvider, useBattle };
