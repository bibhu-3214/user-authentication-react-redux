import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Account = () => {
   const [user, setUser] = useState({});

   useEffect(() => {
      axios
         .get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
               'x-auth': localStorage.getItem('token'),
            },
         })
         .then((resp) => {
            const result = resp.data;
            setUser(result);
         })
         .catch((err) => {
            alert(err.message);
         });
   }, []);

   return (
      <div
         className="container w-50 text-center mt-5"
         style={{ backgroundColor: '#eeeeee', padding: '20px' }}
      >
         <h2>
            Username <h4 className="text-primary">{user.username}</h4>
         </h2>
         <h2>
            Email <h4 className="text-primary">{user.email}</h4>
         </h2>
      </div>
   );
};

export default Account;
