import {MiniUser} from '../../components/header/user'
import * as React from "react";
import {Articles, Logo} from '../../components/header/contentUtils'
import {AddArticle} from '../../components/header/contentUtils'
import views from "../../views";
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
            {props.curPage === views.articles &&  <AddArticle bName={bName} onclick={props.changePage}/>}
            {(props.curPage === views.viewProfile || props.curPage === views.addArticle) &&  <Articles bName="articles" onclick={props.changePage} />}
            <MiniUser profileUrl={props.profileUrl} name={props.name} surname={props.surname} image={props.image} onclick={props.changePage} />

        </div>
    );
}

export default ContentHeader;