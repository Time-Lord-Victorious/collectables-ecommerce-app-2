import { Button } from "react-bootstrap";

export default function IconButton({ isTop, className, onClick, text }) {
    let margin = "light rounded-pill";
    if (isTop) {
        margin = "light rounded-pill";
    }
    const iconMargin = text ? " me-3" : "";
    return (
        <Button variant={margin} onClick={onClick}>
            <i
                className={className + iconMargin}
                style={{ fontSize: "25px", color: isTop ? "dodgerblue" : "black" }}
            ></i>
            {text}
        </Button>
    );
}
