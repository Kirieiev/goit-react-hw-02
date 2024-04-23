// import { useState, useEffect } from "react";
// import Description from "../Description/Description";
// import Options from "../Options/Options";
// import Feedback from "../Feedback/Feedback";
// import Notification from "../Notification/Notification";
// import "../App/App.css";

// function App() {
//   const [totalFeedback, setTotalFeedback] = useState(0);
//   const [feedbackCounts, setFeedbackCounts] = useState(
//     JSON.parse(localStorage.getItem("feedbackCounts")) || {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     }
//   );

//   useEffect(() => {
//     localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
//     setTotalFeedback(
//       feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad
//     );
//   }, [feedbackCounts]);

//   const updateFeedback = (feedbackType) => {
//     setFeedbackCounts((prevState) => ({
//       ...prevState,
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   // const totalFeedback =
//   //   feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

//   const resetFeedback = () => {
//     setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
//   };

//   return (
//     <>
//       <Description />

//       <Options
//         feedbackCounts={Object.keys(feedbackCounts)}
//         updateFeedback={updateFeedback}
//         totalFeedback={totalFeedback}
//         resetFeedback={resetFeedback}
//       />
//       {totalFeedback > 0 ? (
//         <Feedback
//           good={feedbackCounts.good}
//           neutral={feedbackCounts.neutral}
//           bad={feedbackCounts.bad}
//           totalFeedback={totalFeedback}
//           positiveFeedback={Math.round(
//             (feedbackCounts.good / totalFeedback) * 100
//           )}
//         />
//       ) : (
//         <Notification message="No feedback yet" />
//       )}
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import Description from "../Description/Description";
// import Options from "../Options/Options";
// import Feedback from "../Feedback/Feedback";
// import Notification from "../Notification/Notification";
// import "../App/App.css";

// function App() {
//   const [feedbackCounts, setFeedbackCounts] = useState(
//     JSON.parse(localStorage.getItem("feedbackCounts")) || {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     }
//   );

//   // Розрахунок totalFeedback безпосередньо з feedbackCounts
//   const totalFeedback = Object.values(feedbackCounts).reduce(
//     (sum, count) => sum + count,
//     0
//   );

//   // Збереження feedbackCounts у localStorage при монтуванні
//   useEffect(() => {
//     localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
//   }, []);

//   const updateFeedback = (feedbackType) => {
//     setFeedbackCounts((prevState) => ({
//       ...prevState,
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   const resetFeedback = () => {
//     setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
//   };

//   // Розрахунок positiveFeedback всередині компоненту App
//   const positiveFeedback = Math.round(
//     (feedbackCounts.good / totalFeedback) * 100
//   );

//   return (
//     <>
//       <Description />

//       <Options
//         feedbackCounts={Object.keys(feedbackCounts)}
//         updateFeedback={updateFeedback}
//         totalFeedback={totalFeedback}
//         resetFeedback={resetFeedback}
//       />
//       {totalFeedback > 0 ? (
//         <Feedback
//           good={feedbackCounts.good}
//           neutral={feedbackCounts.neutral}
//           bad={feedbackCounts.bad}
//           totalFeedback={totalFeedback}
//           positiveFeedback={positiveFeedback}
//         />
//       ) : (
//         <Notification message="No feedback yet" />
//       )}
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import Description from "../Description/Description";
// import Options from "../Options/Options";
// import Feedback from "../Feedback/Feedback";
// import Notification from "../Notification/Notification";
// import "../App/App.css";

// function App() {
//   const [feedbackCounts, setFeedbackCounts] = useState(
//     JSON.parse(localStorage.getItem("feedbackCounts")) || {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     }
//   );

//   // Розрахунок totalFeedback безпосередньо з feedbackCounts
//   const totalFeedback = Object.values(feedbackCounts).reduce(
//     (sum, count) => sum + count,
//     0
//   );

//   // Збереження feedbackCounts у localStorage при монтуванні та оновленні сторінки
//   useEffect(() => {
//     localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
//   }, [feedbackCounts]);

//   const updateFeedback = (feedbackType) => {
//     setFeedbackCounts((prevState) => ({
//       ...prevState,
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   const resetFeedback = () => {
//     setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
//   };

//   // Розрахунок positiveFeedback всередині компоненту App
//   const positiveFeedback = Math.round(
//     (feedbackCounts.good / totalFeedback) * 100
//   );

//   return (
//     <>
//       <Description />

//       <Options
//         feedbackCounts={Object.keys(feedbackCounts)}
//         updateFeedback={updateFeedback}
//         totalFeedback={totalFeedback}
//         resetFeedback={resetFeedback}
//       />
//       {totalFeedback > 0 ? (
//         <Feedback
//           good={feedbackCounts.good}
//           neutral={feedbackCounts.neutral}
//           bad={feedbackCounts.bad}
//           totalFeedback={totalFeedback}
//           positiveFeedback={positiveFeedback}
//         />
//       ) : (
//         <Notification message="No feedback yet" />
//       )}
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "../App/App.css";

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState(
    JSON.parse(localStorage.getItem("feedbackCounts")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const resetFeedback = () => {
    setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round(
    (feedbackCounts.good / totalFeedback) * 100
  );

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        feedbackCounts={Object.keys(feedbackCounts)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbackCounts.good}
          neutral={feedbackCounts.neutral}
          bad={feedbackCounts.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
