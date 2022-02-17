import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const UserInfo=(props)=>{
    const [user,setUser]=useState({})
    const [userPosts,setUserPosts]=useState([])
    const{id}=props.match.params

    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response)=>{
              setUser(response.data)
          })
          .catch((err)=>{
              console.log(err.message)
          })
    },[])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res)=>{
                setUserPosts(res.data)
            })
            .catch((err)=>{
                console.log(err.message)
            })
    },[])
    return(
        <div>
           <h1>USER NAME :{user.name}</h1>
           <h3>POSTS WRITTEN BY USER</h3>
           <ul>
               {userPosts.map((posts)=>{
                   return <li key={posts.id}><Link to={`/users/${posts.id}`}>{posts.title}</Link></li>
               })}
           </ul>
        </div>
    )
}
export default UserInfo