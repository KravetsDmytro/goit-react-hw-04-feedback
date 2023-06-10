import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //метод  Лічильник + 1
  onLeaveFeedback = e => {
    const label = e.target.textContent;

    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  // Метод підрахунок загальної кількості відгуків
  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );

    return total;
  };

  // відсоток відгуків
  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
