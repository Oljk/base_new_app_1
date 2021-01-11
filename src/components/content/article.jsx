

function Article(props) {
    return (<div>{props.articleName} <br/> <ArticleContent articleText={props.articleText}/>  </div>);
}

function ArticleContent(props) {
    return (<div>{props.articleText}</div>)
}

//export default Article;
export  {Article};