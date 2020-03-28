import React from 'react';
import { spaces } from '../../../constants/game';
import styles from './Board.module.scss';

const Board = () => {
  return (
    <div className={styles.board}>
      {spaces.map(({
        key,
        name,
        isCornerSpace,
        isProperty,
        isRailroad,
        color,
        value,
        column,
        row
      }) =>
        <div
          key={key}
          className={[
            styles.space,
            isCornerSpace ? styles.cornerSpace : '',
            isProperty ? styles.property : '',
            isRailroad ? styles.railroad : ''
          ].join(' ')}
          style={{
            gridColumn: column,
            gridRow: row
          }}
        >
          {isProperty && !isRailroad &&
            <div className={styles.header} style={{ backgroundColor: color }}></div>
          }
          <div className={styles.name}>{name}</div>
          {isProperty && <div className={styles.value}>{value}</div>}
        </div>
      )}
    </div>
  );
};

export default Board;
