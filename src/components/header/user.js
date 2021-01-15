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
            <input type="text" placeholder="input name" name="name"/>
            <input type="text" placeholder="input surname" name="surname"/>
            <button type="submit" onClick={() => {console.log('kek')}}> submit </button>
        </div>
    );
}


export  {MiniUser, HeaderAvatar};