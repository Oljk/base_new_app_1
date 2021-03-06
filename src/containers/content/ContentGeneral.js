import Article from '../../components/content/article.jsx'
import React from "react";
import views from "../../views";
import {Profile} from "../../components/header/Profile";

function ContentGeneral(props) {


    const articles = [
        {
            atrID: 1,
            articleName: 'The Boy Who Lived',
            articleText: 'Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’t hold with such nonsense.'
        }, {
            atrID: 2,
            articleName: 'The Vanishing Glass',
            articleText: 'Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys’ front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr. Dursley had seen that fateful news report about the owls.'
        },
    ] //get from back in someway

        return (
            <div>
                {props.page === views.articles &&
                articles.map((article) => <Article articleName={article.articleName} articleText={article.articleText} key={article.atrID}/>)
                }
                {props.page === views.viewProfile && <Profile curUser={props.curUser} editUser={props.editUser}/>}
                {props.page === views.addArticle && "ВОЗМОЖНО ТУТ ВИСИТ ПОПАП ЧТО МЫ ДОБАВЛЯЕМ СТАТЬЮ"}


            </div>
        );
}

export default ContentGeneral;
