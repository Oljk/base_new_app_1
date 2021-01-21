function Profile(props) {
    return (
        <div>
            Hello, {`${props.curUser.name} ${props.curUser.surname}`}
            <form onSubmit={props.editUser}>
                <p><input type="text" placeholder="input name" name="name"/></p>
                <p>
                    <input type="text" placeholder="input surname" name="surname"/></p>
                <p>
                    <button type="submit" name="submit"> submit</button>
                </p>
            </form>
        </div>
    );
}

export {Profile};