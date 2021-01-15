import views from "../../views";

function MiniUser(props) { // for mini=avatar and username
   // <!--   <a href={props.profileUrl}> </a>
return (<div>
    <HeaderAvatar image={props.image} />
    <button onClick={() => {props.onclick(views.viewProfile)}}> {props.name} {props.surname}  </button>

          </div>
);
}

function HeaderAvatar(props) {
    return(
        <img img={props.image} alt="ava" />
    );
}


function Profile(props) {
    return(
        <div>
            Hello, {props.curUser.name} {props.curUser.surname}
            <form onSubmit={props.editUser} >
                <p>  <input type="text" placeholder="input name" name="name"/></p>
                <p>
                <input type="text" placeholder="input surname" name="surname"/> </p>
                <p>
                <button type="submit" name="submit"> submit </button></p>
            </form>
        </div>
    );
}


export  {MiniUser, HeaderAvatar, Profile};