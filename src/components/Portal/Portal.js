import React, { useEffect, useRef } from "react"
import ReactDOM from 'react-dom';

const Portal = (props) => {
    const el = useRef(document.createElement('div'));
    useEffect(() => {
        const portal = document.getElementById('portal');
        portal.appendChild(el.current);

        return () => {
            portal.removeChild(el.current);
        };

    }, [props.children]);

    return ReactDOM.createPortal(props.children, el.current);
}

export default Portal;

export const PortalDiv = () => <div id='portal'></div>;