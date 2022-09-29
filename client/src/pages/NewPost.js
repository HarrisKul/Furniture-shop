import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./NewPost.css"
import axios from 'axios'

const NewPost = () => {
    const [postForm, setPostForm] = useState({
        title: '',
        city: '',
        photo: '',
        description: '',
        sum: ''
    })
    const [alert, setAlert] = useState({
        message: '',
        status: ''
    })

    const navigate = useNavigate()

    const handleForm = (e) => {
        setPostForm({...postForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        axios.post('/api/posts/', postForm)
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            })

            window.scrollTo(0, 0)

            setTimeout(() => navigate('/'), 2000)
        })
        .catch(error => {
            setAlert({
                message: error.response.data,
                status: 'danger'
            })
        })

    }

    return (
        <div className="container">
            {alert.message && (
                <div className={'alert alert-' + alert.status}>
                    {alert.message}
                </div>
            )}
            <h1>Start your fundraiser now!</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label for="title">Title</label>
                    <br></br>
                    <input type="text" name="title" id="title" onChange={handleForm} />
                </div>
                <div className="form-control">
                    <label for="city">City</label>
                    <br></br>
                    <input type="text" name="city" id="city" onChange={handleForm} />
                </div>
                <div className="form-control">
                    <label for="photo">Photo</label>
                    <br></br>
                    <input type="url" name="photo" id="photo" onChange={handleForm} />
                </div>
                <div className="form-control">
                    <label for="description">Description</label>
                    <br></br>
                    <textarea name="description" id="description" cols="30" rows="10" onChange={handleForm}></textarea>
                </div>
                <div className="form-control">
                    <label for="sum">Your goal:</label>
                    <br></br>
                    <input type="text" name="sum" id="sum" onChange={handleForm} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default NewPost