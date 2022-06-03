import React from 'react';
import './TodoIcon.css';
import { GiCheckMark as CheckSVG } from "react-icons/gi";
import { AiOutlineDelete as DeleteSVG} from "react-icons/ai";

const iconTypes = {
    "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
    ),
    "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
};

function TodoIcon({ type, color='gray', onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };
