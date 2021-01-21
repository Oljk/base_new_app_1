import {ButtonAddArticle} from "./buttonAddArticle";
import views from "../../views";
import React from "react";

function AddArticle(props) {
    return (
        <div>
            <ButtonAddArticle name={props.bName} onclick={props.onclick} page={views.addArticle}/>

        </div>
    );
}

export {AddArticle};