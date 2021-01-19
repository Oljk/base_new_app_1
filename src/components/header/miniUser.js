import views from "../../views";
import HeaderAvatar from "./headerAvatar";

function MiniUser(props) { // for mini=avatar and username
    const click = ()  => {
        props.onclick(views.viewProfile);
    }
    return (<div>
        <HeaderAvatar image={props.image} />
        <button onClick={click}> {`${props.name} ${props.surname}`} </button>

              </div>
    );
}


export  default MiniUser;