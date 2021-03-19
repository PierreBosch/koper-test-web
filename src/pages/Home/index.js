import React from 'react';
import { FaRegHandRock } from 'react-icons/fa';
import SelectedWeapon from '../../components/SelectedWeapon';
import { useBattle } from '../../hooks/battle';

import {
  Container, Content, BattleArena, Arsenal, ArcadeButton,
} from './styles';

function Home() {
  const {
    weapons, shakeHands, playerWeapon, resetingGame, battleFight, computerWeapon, winnerMessage,
  } = useBattle();

  return (
    <Container>
      <Content>
        <BattleArena>
          <SelectedWeapon
            playerWeapon={computerWeapon}
            playerName="Computador"
            flipHandVertical
            labelOnTop
            showShakeHands={shakeHands}
            shakeHandIcon={<FaRegHandRock />}
          />

          <div>
            {winnerMessage !== null ? (<span>{ winnerMessage }</span>) : <span>VS</span>}
          </div>

          <SelectedWeapon
            flipHandVertical={false}
            playerWeapon={playerWeapon}
            playerName="Você"
            showShakeHands={shakeHands}
            shakeHandIcon={<FaRegHandRock />}
          />
        </BattleArena>

        <Arsenal>
          {weapons.map((weapon) => (
            <ArcadeButton disabled={resetingGame} selected={playerWeapon?.weaponName === weapon.weaponName} backgroundColor="#8257e6" key={weapon.id} onClick={() => battleFight(weapon)} type="button">
              {weapon.icon}
              <span>{weapon.weaponName}</span>
            </ArcadeButton>
          ))}
        </Arsenal>
      </Content>
    </Container>
  );
}

export default Home;
