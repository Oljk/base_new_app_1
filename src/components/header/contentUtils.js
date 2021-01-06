function Logo(props) {
    return (<img img={props.logoUrl} className="App-logo" alt={"logo"}/>);
}
function AddArticle(props) {
    return (
      <div>
          <ButtonAddArticle name={props.bName}/>
          Add Article
      </div>
    );
}

function ButtonAddArticle(props) {
    return <button name={props.bName} type="submit">+</button>
}

export {Logo, AddArticle};
