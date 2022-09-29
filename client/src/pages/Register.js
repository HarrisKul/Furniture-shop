import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        first_name: "",	
        last_name: "",
        email: "",
        password: ""
    })
    const [alert, setAlert] = useState({
        message: '',
        status: ''
      })

    const navigate = useNavigate();

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("/api/users/register", form)
        .then(resp =>  {
            setAlert({
                message: resp.data,
                status: 'success'
            })

            setTimeout(() => navigate("/"), 1000)
        })
        .catch(error => {
            setAlert({
                message: error.response.data,
                status: 'danger'
            })
        })
    }

    return ( <div className="container">
            {alert.message && (
        <div className={'alert alert-' + alert.status}>
          {alert.message}
        </div>
        )}
        <h1>Register</h1>
        
        <form onSubmit={handleSubmit}>
         <div className="form-control">
            <label>First Name</label>
            <br></br>
            <input type="text" name="first_name" onChange={handleForm}></input>
        </div>
        <div className="form-control">
            <label>Last Name</label>
            <br></br>
            <input type="text" name="last_name" onChange={handleForm}></input>
        </div>
        <div className="form-control">
            <label>Email</label>
            <br></br>
            <input type="email" name="email" onChange={handleForm}></input>
        </div>
        <div className="form-control">
            <label>Password</label>
            <br></br>
            <input type="password" name="password" onChange={handleForm}></input>
        </div>
        <button className="btn btn-primary">Register</button>
    </form>    
    </div> 
    )
}

export default Register;