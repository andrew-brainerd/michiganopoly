import React from 'react';
import styles from './Board.module.scss';

const Board = () => {
  return (
    <div className={styles.board}>
      <div className={[styles.space, styles.cornerSpace, styles.go].join(' ')}>Go</div>
      <div className={[styles.space, styles.cornerSpace, styles.jail].join(' ')}>Jail</div>
      <div className={[styles.space, styles.cornerSpace, styles.freeParking].join(' ')}>FP</div>
      <div className={[styles.space, styles.cornerSpace, styles.goToJail].join(' ')}>Go To Jail</div>
      <div className={[styles.space, styles.owosso].join(' ')}>Owosso</div>
      <div className={[styles.space, styles.communityChest, styles.bottom].join(' ')}>Community Chest</div>
      <div className={[styles.space, styles.corunna].join(' ')}>Corunna</div>
      <div className={[styles.space, styles.incomeTax].join(' ')}>Income Tax</div>
      <div className={[styles.space, styles.railroad, styles.reading].join(' ')}>Reading Railroad</div>
      <div className={[styles.space, styles.railroad, styles.pennsylvania].join(' ')}>Reading Railroad</div>
      <div className={[styles.space, styles.railroad, styles.bando].join(' ')}>Reading Railroad</div>
      <div className={[styles.space, styles.railroad, styles.shortLine].join(' ')}>Reading Railroad</div>
      <div className={[styles.space, styles.orientalAvenue].join(' ')}>Oriental Avenue</div>
      <div className={[styles.space, styles.chance, styles.bottom].join(' ')}>Chance</div>
      <div className={[styles.space, styles.vermontAvenue].join(' ')}>Vermont Avenue</div>
      <div className={[styles.space, styles.conneticutAvenue].join(' ')}>Conneticut Avenue</div>
    </div>
  );
};

export default Board;
