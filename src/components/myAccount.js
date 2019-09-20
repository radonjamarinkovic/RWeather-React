import React, {useState} from 'react'
import  user  from '../assets/icons/user.svg';

function MyAccount() {

    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
        console.log(edit);
    };

    return (
        <div className="container">
        </div>
    )
};

export default MyAccount;
