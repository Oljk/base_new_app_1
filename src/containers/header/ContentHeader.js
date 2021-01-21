import * as React from "react";
import views from "../../views";
import {Articles} from "../../components/header/articles";
import {AddArticle} from "../../components/header/addArticleComp";
import {Logo} from "../../components/header/Logo";
import MiniUser from "../../components/header/miniUser";


function ContentHeader(props) {

    const bName = 'add';

    return (<div>
            <Logo logoUrl={props.logoUrl}/>
            {props.curPage === views.articles &&  <AddArticle bName={bName} onclick={props.changePage}/>}
            {(props.curPage === views.viewProfile || props.curPage === views.addArticle) &&  <Articles bName="articles" onclick={props.changePage} />}
            <MiniUser profileUrl={props.profileUrl} name={props.curUser.name} surname={props.curUser.surname} image={props.image} onclick={props.changePage}  />

        </div>
    );
}

export default ContentHeader;