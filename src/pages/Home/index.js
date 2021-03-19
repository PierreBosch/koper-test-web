import React from 'react';
import { FaRegHandRock } from 'react-icons/fa';
import { useBattle } from '../../hooks/battle';

import {
  Container, Content, BattleArena, WeaponSelected, Arsenal, ArcadeButton, LoadingResult,
} from './styles';

function Home() {
  const {
    weapons, shakeHands, playerWeapon, resetingGame, battleFight, computerWeapon, winnerMessage,
  } = useBattle();

  const showIcon = (Icon) => <Icon size={30} />;

  return (
    <Container>
      <Content>

        <BattleArena>
          <WeaponSelected flipHandVertical weaponSelected={computerWeapon !== null}>
            <span>
              Computador
              {' '}
              {computerWeapon !== null && `escolheu ${computerWeapon.weaponName}`}
            </span>
            <div>
              <LoadingResult>
                {shakeHands && <FaRegHandRock />}
              </LoadingResult>
              {computerWeapon?.icon}
            </div>
          </WeaponSelected>

          <div>
            {winnerMessage !== null ? (<span>{ winnerMessage }</span>) : <span>VS</span>}
          </div>

          <WeaponSelected weaponSelected={playerWeapon !== null}>
            <div>
              <LoadingResult>
                {shakeHands && <FaRegHandRock />}
              </LoadingResult>
              {playerWeapon?.icon}
            </div>
            <span>
              Você
              {' '}
              {playerWeapon !== null && `escolheu ${playerWeapon.weaponName}`}
            </span>
          </WeaponSelected>
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
