import { memo } from "react";
const Card = ({ text, children }) => {
  return (
    <div style={{ border: "2px solid green", padding: "60px", margin: "30px" }}>
      <h2>{children}</h2>
    </div>
  );
};

export default memo(Card);
