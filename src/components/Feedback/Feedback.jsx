import css from "../Feedback/FeedBack.module.css";
import clsx from "clsx";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className="feedback">
      <h2></h2>
      <p className={css.good}>Good:{good}</p>
      <p className={css.good}>Neutral:{neutral}</p>
      <p className={css.bad}>Bad:{bad}</p>
      <p
        className={clsx("", {
          [css.good]: good > bad,
          [css.bad]: bad > good,
        })}
      >
        Total:{totalFeedback}
      </p>
      <p className={css.good}>Positive:{positivePercentage}%</p>
    </div>
  );
};
export default Feedback;
