import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => {
          const color = generateRandomColor();
          return (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor: `${color}` }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};


function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default Statistics;
