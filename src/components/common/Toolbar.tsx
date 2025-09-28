import "../styles/buttonStyles.css";

import type { ReactElement } from "react";

type Button = {
  name: string;
  handleClick: () => void;
};
type ButtonProps = {
  btnList: Button[];
};

export default function Toolbar({ btnList }: ButtonProps): ReactElement {
  return (
    <div style={{ marginLeft: "2%", marginBottom: "2px" }}>
      {btnList?.map((btn) => {
        return (
          <button
            key={btn?.name}
            className="refresh-btn"
            onClick={btn?.handleClick}
          >
            {btn?.name}
          </button>
        );
      })}
    </div>
  );
}
