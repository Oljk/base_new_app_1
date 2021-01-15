import PropTypes from 'prop-types';
import views from "../../views";
import React from "react";

function Logo(props) {
    return (<img img={props.logoUrl} className="App-logo" alt={"logo"}/>);
}
function AddArticle(props) {
    return (
      <div>
          <ButtonAddArticle name={props.bName} onclick={props.onclick} page={views.addArticle}/>

      </div>
    );
}

function ButtonAddArticle(props) {
    return  <button name={props.bName} type="submit" onClick={() => {props.onclick(props.page)}}>ADD ARTICLE</button>
}

ButtonAddArticle.propTypes = {
    onClick: PropTypes.func.isRequired
};


function Articles(props) {
    return  <button name={props.bName} type="submit" onClick={() => {props.onclick(views.articles)}}>ARTICLES</button>
}



export {Logo, AddArticle,Articles};
