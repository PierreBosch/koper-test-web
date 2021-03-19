import React from 'react';

import { Weapon, LoadingResult } from './styles';

function SelectedWeapon({
  playerWeapon, playerName, showShakeHands, shakeHandIcon, flipHandVertical = false, labelOnTop = false,
}) {
  return (
    <Weapon labelOnTop={labelOnTop} flipHandVertical={flipHandVertical} weaponSelected={playerWeapon !== null}>
      <div>
        <LoadingResult>
          {showShakeHands && shakeHandIcon}
        </LoadingResult>
        {playerWeapon?.icon}
      </div>
      <span>
        { playerName }
        {' '}
        {playerWeapon !== null && `escolheu ${playerWeapon.weaponName}`}
      </span>
    </Weapon>
  );
}

export default SelectedWeapon;
