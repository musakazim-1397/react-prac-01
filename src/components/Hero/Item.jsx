import { useRef } from "react";
import "./styles.css";

function HorizontalList({ items }) {
  const containerRef = useRef(null);

  const scrollToLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollToRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="horizontal-list-container" ref={containerRef}>
      {items.map((item, index) => (
        <div key={index} className="horizontal-list-item">
          {item.name}
        </div>
      ))}
      <div className="scroll-buttons">
        <button onClick={scrollToLeft}>{"<"}</button>
        <button onClick={scrollToRight}>{">"}</button>
      </div>
    </div>
  );
}

export default HorizontalList;
