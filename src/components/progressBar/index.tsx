import "./style.css";

type Props = {
  progress: number;
};

export const ProgressBar = (props: Props) => {
  return (
    <div className="progress">
      <div
        style={{ width: `${props.progress}%` }}
        className="progress__bar"
      ></div>
    </div>
  );
};
