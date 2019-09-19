import React, {useState} from 'react'
import  user  from '../assets/icons/user.svg';

function MyAccount() {

    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
        console.log(edit);
    };

    return (
        <div className="container c-block">
            <div className="gird-container">
                <div className="box1">
                    <div className="heading">
                        <h4>Account information</h4>
                        <span onClick={handleEdit}>
                            {edit ? "<- go back" : "edit info"}
                        </span>
                    </div>
                    <img src={user}  alt="display namer"/>
                </div>
                <div className="box2">
                    <div className="heading">
                        <h4>Account information</h4>
                        <span onClick={handleEdit}>
                            {edit ? "<- go back" : "edit info"}
                        </span>
                    </div>
                </div>
                <div className="box3"><h1>box 3</h1></div>
                <div className="box4"><h1>box 4</h1></div>
            </div>
        </div>
    )
};

export default MyAccount;
