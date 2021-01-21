import ContentHeader from "./header/ContentHeader";
import ContentGeneral from "./content/ContentGeneral";
import React, {useState} from "react";
import views from "../views";



function UserPage(props) {

    const exampleUser = {
        profileUrl: '/user/1',
        name : 'Ivan',
        surname : 'Ivanov'
    };

    const [page, setPage] = useState(views.articles);
    const [curUser, setCurUser] = useState(exampleUser);

    const logoUrl = './src/logo.svg';


    function editUser(event) {
        setCurUser({
            name : event.target[0].value,
            surname : event.target[1].value
        });
        event.preventDefault();
    }


    return   <div className="App">
        <header className="App-header">
            <ContentHeader image={logoUrl} profileUrl={exampleUser.profileUrl} name={exampleUser.name}
                           surname={exampleUser.surname} logoUrl={logoUrl} changePage={setPage} curPage={page} curUser={curUser}/>
            <div>Oljko talks</div>
            <div> {page} </div>
        </header>
        <ContentGeneral page={page} curUser={curUser} editUser={editUser}/>
    </div>

}

export default UserPage;