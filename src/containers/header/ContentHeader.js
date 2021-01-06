import {MiniUser} from '../../components/header/user'
import * as React from "react";
import {Logo} from '../../components/header/contentUtils'
import {AddArticle} from '../../components/header/contentUtils'
//переделать в класс ???

function ContentHeader(props) {
 //   const image = {};
//   const profileUrl = {};
 //   const name = {};
 //   const surname = {};
   // const  logoUrl = {};
    const bName = 'add';
    /*
    const onFormSubmit = (formData) => {
        // console.log('Form data:', formData); // example of callback
        console.log(formData);
    }; */


    return (<div>
            <Logo logoUrl={props.logoUrl}/>
            <AddArticle bName={bName}/>
            <MiniUser profileUrl={props.profileUrl} name={props.name} surname={props.surname} image={props.image} />

        </div>
    );
}

export default ContentHeader;