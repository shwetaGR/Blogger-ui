import React from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './Home'
import UsersList from './UsersList'
import UserInfo from './UserInfo'
import PostsList from './PostsList'
import PostInfo from './PostInfo'

const App=(props)=>{
    return(
        <div>
        <Link to="/">Home</Link> |
        <Link to="/users">Users</Link > |
        <Link to="/posts">Posts</Link>
        
        <Route path='/' component={Home} exact={true}/>
        <Route path="/users" component={UsersList} exact={true}/>
        <Route path="/users/:id" component={UserInfo}/>
        <Route path="/posts" component={PostsList} exact={true}/>
        <Route path="/posts/:id" component={PostInfo}/>
        
        </div>
    )
} 
 export default App
