function MiniUser(props) { // for mini=avatar and username
   //
return (<div>
    <HeaderAvatar image={props.image} />  <a href={props.profileUrl}> {props.name} {props.surname} </a>
          </div>
);
}

function HeaderAvatar(props) {
    return(
        <img img={props.image} alt="ava" />
    );
}

export  {MiniUser, HeaderAvatar};