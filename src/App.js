//import logo from './logo.svg';
import './App.css';
import ContentHeader from "./containers/header/ContentHeader";
import ContentGeneral from './containers/content/ContentGeneral';
import React from "react";
import views from "./views";

function App() {
    const [page, setPage] = React.useState(views.articles);

    const logoUrl = './src/logo.svg';

    const exampleUser = {
        profileUrl: '/user/1',
        name : 'Ivan',
        surname : 'Ivanov'
    };

  return (
    <div className="App">
      <header className="App-header">
          <ContentHeader image={logoUrl} profileUrl={exampleUser.profileUrl} name={exampleUser.name}
                         surname={exampleUser.surname} logoUrl={logoUrl} changePage={setPage} curPage={page}/>
          <div>Oljko talks</div>
          <div> {page} </div>
      </header>
        <ContentGeneral page={page}/>
    </div>
  );
}

export default App;

