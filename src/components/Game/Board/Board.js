import React from 'react';
import { spaces } from '../../../constants/game';
import styles from './Board.module.scss';

const getLocation = (column, row) => {
  if (row === 11) return 'bottom';
  if (column === 1) return 'left';
  if (row === 1) return 'top';
  if (column === 11) return 'right';
};

const Board = () => {
  return (
    <div className={styles.board}>
      {spaces.map(({
        key,
        name,
        isCornerSpace,
        isProperty,
        isRailroad,
        isUtility,
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
          <div
            className={[
              styles.content,
              !isCornerSpace && styles[getLocation(column, row)]
            ].join(' ')}
          >
            {isProperty && !isRailroad && !isUtility &&
              <div className={styles.header} style={{ backgroundColor: color }}></div>
            }
            <div className={styles.name}>{name}</div>
            {isProperty && <div className={styles.value}>{value}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
