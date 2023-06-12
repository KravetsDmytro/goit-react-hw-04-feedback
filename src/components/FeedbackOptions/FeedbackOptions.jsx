import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ optionsGood, optionsNeutral, optionsBad }) => {
  return (
    <ul className={css.list}>
          <li className={css.item}>
            <button  className={css.button}
              type="button"
              onClick={optionsGood}
            > Good
            </button>
            <button  className={css.button}
              type="button"
              onClick={optionsNeutral}
            > Neutral
            </button>
            <button  className={css.button}
              type="button"
              onClick={optionsBad}
            > Bad
            </button>


          </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
