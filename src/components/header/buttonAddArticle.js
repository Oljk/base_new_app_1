import PropTypes from "prop-types";
import React from "react";

export function ButtonAddArticle(props) {
    return <button name={props.bName} type="submit" onClick={() => {
        props.onclick(props.page)
    }}>ADD ARTICLE</button>
}

ButtonAddArticle.propTypes = {
    onClick: PropTypes.func.isRequired
};