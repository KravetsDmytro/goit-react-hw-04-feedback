import   { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

const  App =() => {
  const [good, setGood] = useState(0) ;
const [neutral, setNeutral]= useState(0);
  const [bad, setBad]= useState(0);


  //метод  Лічильник + 1
  const onGood = () => {
    setGood(prevState => (prevState += 1));
  };
  const onNeutral = () => {
    setNeutral(prevState => (prevState += 1));
  };
  const onBad = () => {
    setBad(prevState => (prevState += 1));
  };

  // Метод підрахунок загальної кількості відгуків
  const countTotalFeedback = () => {
    return   good + neutral + bad;
  };

  // відсоток відгуків
  function countPositiveFeedbackPercentage() {
    return Math.round((100 * good) / (good + neutral + bad));
  }

  const options = ['good', 'neutral', 'bad'];


    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
           <FeedbackOptions optionsGood={onGood}
          optionsNeutral={onNeutral}
          optionsBad={onBad}      />
         <Statistics
          goodValue={good}
          neutralValue={neutral}
          badValue={bad}
          totalValue={countTotalFeedback()}
          positiveFeedbackValue={countPositiveFeedbackPercentage()}
        />
       </Section>
      </div>
    );
  }


export default App;
