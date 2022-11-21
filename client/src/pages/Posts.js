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
            <h1>Our Products</h1>
            {posts.length > 0 && 
            posts.map(post => {
                console.log(post)
                return (
                    
                  <div className='products' key={post.id}>
                    <h2>{post.name}</h2>
                    <img className='product-img' src={post.photo} alt={post.name} />
                    <p>{post.description}</p>
                    <p> Price: {post.price} Eur
                    <button className='button'><Link to={'/'}>Order</Link> </button>
                    </p>
                </div>
                    

                )
                })}
        </div>

    )
}

export default Posts