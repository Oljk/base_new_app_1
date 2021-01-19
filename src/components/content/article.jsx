import {ArticleContent} from "./articleContent";

function Article(props) {
    return (<div>{props.articleName} <br/> <ArticleContent articleText={props.articleText}/>  </div>);
}

export default Article;