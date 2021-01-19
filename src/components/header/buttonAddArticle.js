import PropTypes from "prop-types";
import React from "react";

export function ButtonAddArticle(props) {
    const click = () => {
        props.onclick(props.page);
    }
    return <button name={props.bName} type="submit" onClick={click}>ADD ARTICLE</button>
}

ButtonAddArticle.propTypes = {
    onclick: PropTypes.func.isRequired
};