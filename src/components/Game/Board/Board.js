import React from 'react';
import styles from './Board.module.scss';

const Board = () => {
  return (
    <div className={styles.board}>
      <div className={[styles.cornerSpace, styles.go].join(' ')}>Go</div>
      <div className={[styles.cornerSpace, styles.jail].join(' ')}>Jail</div>
      <div className={[styles.cornerSpace, styles.freeParking].join(' ')}>FP</div>
      <div className={[styles.cornerSpace, styles.goToJail].join(' ')}>Go To Jail</div>
    </div>
  );
};

export default Board;
