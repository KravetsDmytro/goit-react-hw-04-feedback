import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';


function Statistics({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positiveFeedbackValue,
}) {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      {goodValue || neutralValue || badValue ? (
        <div className={css.valueList}>
          {' '}
          <ul>
            <li>
              <p className={css.goodValue}>Good:{goodValue}</p>
            </li>
            <li>
              <p className={css.neutralValue}>Neutral:{neutralValue}</p>
            </li>
            <li>
              <p className={css.badValue}>Bad:{badValue}</p>
            </li>
            <li>
              <p className={css.goodValue}>total:{totalValue}</p>
            </li>
            <li>
              <p className={css.goodValue}>
                Positive feedback:{positiveFeedbackValue}%
              </p>
            </li>
          </ul>
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
}
export default Statistics;






Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

