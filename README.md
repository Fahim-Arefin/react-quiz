# Quiz App

## Overview

This React-based quiz application features components for user interface, state management, and data fetching. Users can start the quiz, answer questions, and track their progress. The app communicates with a local server to load quiz questions and handles loading and error states. It employs a scoring system, calculating points based on correct answers and the associated question values. The user's highest score is also tracked. After completing the quiz, users have the option to restart. Overall, this project offers an engaging quiz experience, assessing knowledge, and providing an enjoyable way to compete for high scores within a time limit.

## Try it Out

You can try the Quiz App [here](https://react-quiz-system.netlify.app/).

## Features

- **Question Loading**: The app fetches quiz questions from a local server and handles loading and error states during the process.

- **User Interaction**: Users can start the quiz, answer questions, track their progress, and receive scores.

- **Scoring System**: Points are awarded based on the correctness of answers and the point values associated with each question. The user's highest score is recorded.

- **Timer**: Each question comes with a timer, counting down from a set time. When the timer runs out, the question is considered answered.

- **Restart Option**: After completing the quiz, users have the option to restart and attempt the quiz again.

## State Management

The application utilizes the `useReducer` hook for state management. The state includes information about the quiz questions, the current quiz status (loading, ready, active, or finished), user progress, answers, scores, and time remaining for each question. The state management system handles various actions, such as loading questions, handling errors, managing user interactions, and updating the timer.
