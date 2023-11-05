import { useState } from "react";
import UserRegField from "./UserRegField"
import "./UserRegForm.css";

const UserRegForm = () => {
    
    const [values, setValues] = useState({
        username: "",
        email: "",
        dob: "",
        password: "",
        verifypassword: "",
    })

    const regFields = [
        {
            id:1,
            name: "username",
            type: "text",
            placeholder:"Username",
            label:"Username",
            required: true,
            pattern: "^[a-zA-Z0-9]{3,12}$",
            errorMessage: "User name should be 3-16 characters and no special character!",
        }
        ,{
            id:2,
            name: "email",
            type: "email",
            placeholder:"eMail",
            label:"eMail",
            required: true,
            errorMessage: "Please enter a valid eMail address!",
        }
        ,{
            id:3,
            name: "dob",
            type: "date",
            placeholder:"Date of Birth",
            label:"Date of Birth",
        }
        ,{
            id:4,
            name: "password",
            type: "password",
            placeholder:"Password",
            label:"Password",
            required: true,
            pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
            errorMessage: "Password rule: 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
        }
        ,{
            id:5,
            name: "verifypassword",
            type: "password",
            placeholder:"Verify Password",
            label:"Verify Password",
            required: true,
            pattern: values.password,
            errorMessage: "Password don't match!",
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return(
        <div className="UserRegForm">
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                {regFields.map((regField)=>(
                    <UserRegField key={regField.id} {...regField} 
                        value={values[regField.name]} 
                        onChange={onChange}>
                    </UserRegField>
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UserRegForm;