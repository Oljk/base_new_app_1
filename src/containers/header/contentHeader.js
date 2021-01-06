import MiniUser from '../components/header/user.js'
import Logo from '../components/header/contentUtils.js'
import AddArticle from '../components/header/contentUtils.js'

function ContentHeader() {
    const image = {};
    const profileUrl = {};
    const name = {};
    const surname = {};
    const  logoUrl = {};
    const bName = {};
    /*
    const onFormSubmit = (formData) => {
        // console.log('Form data:', formData); // example of callback
        console.log(formData);
    }; */

    return (<div>
        <Logo logoUrl={logoUrl}/>
        <AddArticle bName={bName}/>
       <MiniUser image={image} profileUrl={profileUrl} name={name} surname={surname}/> </div>
    );
}

export default ContentHeader;