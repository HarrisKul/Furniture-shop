import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Posts.css'


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [alert, setAlert] = useState({
        message: '',
        status: ''
      })

    useEffect(() => {
        axios.get('/api/posts/')
        .then(resp => { 
          setPosts(resp.data)
        })
        .catch(error => {
          setAlert({
            message: error.response.data,
            status: 'danger'
          })
        })
    }, [])

    return (
        
        <div className='container'>
             {alert.message && (
          <div className={'alert alert-' + alert.status}>
            {alert.message}
          </div>
        )}
            <h1>Donations</h1>
            {posts.length > 0 && 
            posts.map(post => {
                console.log(post)
                return (
                    
                  <div key={post.id}>
                    <h1>{post.title}</h1>
                    <h2>{post.city}</h2>
                    <img src={post.photo} alt={post.title} />
                    <p>{post.description}</p>
                    <p> GOAL: {post.sum} Eu</p>
                    <button><Link to={'/'}>Donate</Link> </button>
                </div>
                    

                )
                })}
        </div>

    )
}

export default Posts