import { useRef, useState } from "react";
import './Expandable.style.scss';

const Expandable = ({ caption, captionExpanded, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return ( // TODO: arrow showing state
        <div className={`expandable 
            ${isExpanded
                ? "expanded"
                : ""}`}>
            <div className="caption" onClick={toggleExpanded}>
                {isExpanded
                    ? (captionExpanded ?? "Show less")
                    : (caption ?? "Show more")}
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    )
}

export default Expandable
