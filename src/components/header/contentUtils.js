import PropTypes from 'prop-types';

function Logo(props) {
    return (<img img={props.logoUrl} className="App-logo" alt={"logo"}/>);
}
function AddArticle(props) {
    return (
      <div>
          <ButtonAddArticle name={props.bName} onclick={() => props.onclick()} />
          Add Article
      </div>
    );
}

function ButtonAddArticle(props) {
    return  <button name={props.bName} type="submit" onClick={props.onclick}>+</button>
}

ButtonAddArticle.propTypes = {
    onClick: PropTypes.func.isRequired
};





export {Logo, AddArticle};
