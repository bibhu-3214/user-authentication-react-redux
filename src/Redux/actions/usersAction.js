import axios from 'axios';

export const register = (formData, resetForm, redirectToLogin) => {
   return (dispatch) => {
      axios
         .post('http://dct-user-auth.herokuapp.com/users/register', formData)
         .then((resp) => {
            const result = resp.data;
            if (result.hasOwnProperty('errors')) {
               alert(result.message);
            } else {
               alert('successfully created user');
               resetForm();
               redirectToLogin();
            }
            dispatch(isRegister(result));
         })
         .catch((err) => {
            alert(err.message);
         });
   };
};

const isRegister = (result) => {
   return {
      type: 'REGISTER',
      payload: result,
   };
};

export const login = (formData, redirectToHome) => {
   return (dispatch) => {
      axios
         .post('http://dct-user-auth.herokuapp.com/users/login', formData)
         .then((resp) => {
            const res = resp.data;
            if (res.hasOwnProperty('errors')) {
               alert(res.errors);
            } else {
               alert('Login Successful');
               localStorage.setItem('token', res.token);
               redirectToHome();
            }
            dispatch(isLogin(res));
         })
         .catch((err) => {
            alert(err.message);
         });
   };
};

const isLogin = (res) => {
   return {
      type: 'LOGIN',
      payload: res,
   };
};
