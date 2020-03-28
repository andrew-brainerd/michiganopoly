import React from 'react';
import { spaces } from '../../../constants/game';
import styles from './Board.module.scss';

const Board = () => {
  return (
    <div className={styles.board}>
      {spaces.map(({ key, name, isCornerSpace, column, row }) =>
        <div
          key={key}
          className={[
            styles.space,
            isCornerSpace ? styles.cornerSpace : ''
          ].join(' ')}
          style={{ gridColumn: column, gridRow: row }}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default Board;
