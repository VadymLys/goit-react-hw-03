import css from "../Options/Options.module.css";
import clsx from "clsx";

const Options = ({ onReset, hasFeedback, changeFeedback }) => {
  return (
    <div className={css.buttons}>
      <button
        className={css.btn}
        onClick={() => {
          changeFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.btn}
        onClick={() => {
          changeFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        onClick={() => {
          changeFeedback("bad");
        }}
      >
        Bad
      </button>
      {hasFeedback > 0 && (
        <button className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
