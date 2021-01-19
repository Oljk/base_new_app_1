import views from "../../views";
import React from "react";

function Articles(props) {
    const click = () => {
        props.onclick(views.articles);
    }
    return <button name={props.bName} type="submit" onClick={click} >ARTICLES</button>
}

export {Articles};