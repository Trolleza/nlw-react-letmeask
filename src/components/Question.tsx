import { ReactNode } from "react";
import cx from "classnames";

import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode; //Significa qualquer texto JSX: texto, div, basicamente QUALQUER COISA!
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    <div
      className={cx( //só é possível assim pelo npm classnames
        "question",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered },
        //Normalmente usaríamos assim: classname={`question ${isAnswered ? "answered" : ""} ${isHighlighted ? "highlighted" : ""}`};
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
