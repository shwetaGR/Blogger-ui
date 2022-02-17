import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const PostInfo=(props)=>{
     const[user,setUser]=useState({})
     const[post,setPost]=useState([])
     const[comment,setComment]=useState([])
     const{id}=props.match.params

     //using promises
         useEffect(()=>{
          Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)])
          .then((value)=>{
              const[res1,res2]=value
              axios.get(`https://jsonplaceholder.typicode.com/users/${res1.data.userId}`)
              .then((res)=>{
                  setUser(res.data)
              })
              .catch((err)=>{
                  alert(err.message)
              })
              setPost(res1.data)
              setComment(res2.data)
          })
          .catch((err)=>{
              alert(err.message)
          })
     },[]) 

     /*  useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=>{
             setUser(res.data)
            //  console.log(res.data)
         })
         .catch((err)=>{
             console.log(err.message)
         })
     },[])

      useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response)=>{
                setPost(response.data)
                // console.log(response.data)
             })
             .catch((err)=>{
                 console.log(err.message)
             })
     },[])

     useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
         .then((res)=>{
             setComment(res.data)
         })
         .catch((err)=>{
             console.log(err.message)
         })
     },[])  */ 
    return(
        <div>
            <h2>USER NAME-{user.name}</h2>
            
            <h2>TITLE:{post.title}</h2>
            <h2>Body:<br/> 
            {post.body}</h2><hr/>
            <h2>COMMENTS</h2>
            <ul>
                {comment.map((ele)=>{
                    return <li key={ele.id}>{ele.body}</li>
                })}
            </ul><hr/>
            <Link to='/users'>{`move posts of auther:${user.name}`}</Link>
        </div>
    )
}
export default PostInfo