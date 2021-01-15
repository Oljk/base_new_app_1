//import logo from './logo.svg';
import './App.css';
import ContentHeader from "./containers/header/ContentHeader";
import ContentGeneral from './containers/content/ContentGeneral';
import React from "react";
import views from "./views";

function App() {

    const exampleUser = {
        profileUrl: '/user/1',
        name : 'Ivan',
        surname : 'Ivanov'
    };

    const [page, setPage] = React.useState(views.articles);
    const [curUser, setCurUser] = React.useState(exampleUser);

    const logoUrl = './src/logo.svg';


    function editUser(event) {
        setCurUser({
            name : event.target[0].value,
            surname : event.target[1].value
        });
        event.preventDefault();
    }

  return (
    <div className="App">
      <header className="App-header">
          <ContentHeader image={logoUrl} profileUrl={exampleUser.profileUrl} name={exampleUser.name}
                         surname={exampleUser.surname} logoUrl={logoUrl} changePage={setPage} curPage={page} curUser={curUser}/>
          <div>Oljko talks</div>
          <div> {page} </div>
      </header>
        <ContentGeneral page={page} curUser={curUser} editUser={editUser}/>
    </div>
  );
}

export default App;

