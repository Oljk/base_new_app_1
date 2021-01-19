import views from "../../views";
import React from "react";

function Articles(props) {
    return <button name={props.bName} type="submit" onClick={() => {
        props.onclick(views.articles)
    }}>ARTICLES</button>
}

export {Articles};