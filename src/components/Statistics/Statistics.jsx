import data from '../json/data.json';
import css from './Statistics.module.css'

const Statistics = (props) => {
  return (
    <div className={css.StatisticsContainer}>
      <h2 className={css.title}>Upload stats</h2>
      <section className={css.statistics} >
      {data.map((data) => (
        
          <ul className={css.statList} key={data.id}>
            <li className={css.item}>
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage}%</span>
            </li>
          </ul>
        
      ))}</section>
    </div>
  );
};

export default Statistics;