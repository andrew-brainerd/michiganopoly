import React from 'react';
import Board from './Board/Board';
import styles from './Game.module.scss';

const Game = () => (
  <div className={styles.game}>
    <Board />
  </div>
);

export default Game;
