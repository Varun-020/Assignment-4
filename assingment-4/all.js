// The code itself is fine and optimized

//App.js
import {loadUser}  from '../actions/auth';
store.dispatch(loadUser());


//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthState from './context/auth/AuthState'
ReactDOM.render(
 <React.StrictMode>
   <AuthState>
     <App />
   </AuthState>
 </React.StrictMode>,
 document.getElementById('root')
);


//App.js

 const authContext = useContext(AuthContext);
 const { loadUser } = authContext;
 useEffect(() => {
   loadUser();
 },[])


//loadUser

   const loadUser = async () => {
       const token = sessionStorage.getItem('token');
       if(!token){
           dispatch({
               type: ERROR
           })
       }
       setAuthToken(token);
       try {
           const res = await axios('/api/auth');
           dispatch({
               type: USER_LOADED,
               payload: res.data.data
           })
       } catch (err) {
          console.error(err);
       }
   }
