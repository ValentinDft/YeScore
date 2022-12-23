import styles from './list-league.module.scss';
import { v4 as uuidv4 } from 'uuid';

const ListLeague = () => {
  const arrayLeague = [
    'Premier League',
    'Eredivisie',
    'Super Lig',
    'Serie A',
    'Champions League',
    'Liga',
    'Bundesliga',
    'Europa League',
    'Ligue 1',
  ];
  return (
    <div className={styles['list-league']}>
      {arrayLeague.map((item) => {
        return (
          <div className={styles['list-league-item']} key={uuidv4()}>
            <div className={styles['img']}></div>
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListLeague;
