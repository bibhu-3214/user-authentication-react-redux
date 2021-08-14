import axios from 'axios';
import Swal from 'sweetalert2';

export const addNotes = (formData) => {
   return (dispatch) => {
      axios
         .post('http://dct-user-auth.herokuapp.com/api/notes', formData, {
            headers: { 'x-auth': localStorage.getItem('token') },
         })
         .then((resp) => {
            const note = resp.data;
            dispatch(addItem(note));
         })
         .catch((err) => {
            alert(err.message);
         });
   };
};

export const addItem = (note) => {
   return {
      type: 'ADD_NOTE',
      payload: note,
   };
};

export const removeNotes = (_id) => {
   return (dispatch) => {
      const confirmRemove = window.confirm('are you sure');
      if (confirmRemove) {
         axios({
            method: 'delete',
            url: `http://dct-user-auth.herokuapp.com/api/notes/${_id}`,
            headers: { 'x-auth': localStorage.getItem('token') },
         })
            .then((resp) => {
               const result1 = resp.data;
               dispatch(removeItem(result1._id));
            })
            .catch((err) => {
               alert(err.message);
            });
      }
   };
};

export const removeItem = (_id) => {
   return {
      type: 'REMOVE_ITEM',
      payload: _id,
   };
};

export const getNotes = () => {
   return (dispatch) => {
      axios({
         method: 'get',
         url: 'http://dct-user-auth.herokuapp.com/api/notes',
         headers: { 'x-auth': localStorage.getItem('token') },
      })
         .then((resp) => {
            const res = resp.data;
            dispatch(getItem(res));
         })
         .catch((err) => {
            alert(err.message);
         });
   };
};

export const getItem = (res) => {
   return {
      type: 'GET_ITEM',
      payload: res,
   };
};

export const getItemById = (_id) => {
   return (dispatch) => {
      axios({
         method: 'get',
         url: `http://dct-user-auth.herokuapp.com/api/notes/${_id}`,
         headers: { 'x-auth': localStorage.getItem('token') },
      })
         .then((resp) => {
            const result = resp.data;
            Swal.fire(result.title, result.body);
            dispatch(getById(result));
         })
         .catch((err) => {
            alert(err.message);
         });
   };
};

export const getById = (result) => {
   return {
      type: 'GETBY_ID',
      payload: result,
   };
};

export const editNote = (result, id) => {
   return (dispatch) => {
      axios
         .put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, result, {
            headers: {
               'x-auth': localStorage.getItem('token'),
            },
         })
         .then((response) => {
            const note = response.data;
            dispatch(editItem(note));
         })
         .catch((err) => {
            alert(err.message);
         });
   };
};

export const editItem = (note) => {
   return {
      type: 'EDIT_ITEM',
      payload: note,
   };
};
