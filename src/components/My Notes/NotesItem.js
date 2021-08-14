import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItemById, removeNotes } from '../../Redux/actions/notesAction';
import EditNote from './EditNote';

const NotesItem = ({ ...note }) => {
   const [toggle, setToggle] = useState(false);

   const dispatch = useDispatch();

   const handleToggle = () => {
      const result = !toggle;
      setToggle(result);
   };

   const handleClick = (_id) => {
      dispatch(getItemById(_id));
   };

   const handleRemove = (_id) => {
      dispatch(removeNotes(_id));
   };

   return (
      <>
         {toggle ? (
            <div className="border border-4 p-3 bg-white">
               <EditNote
                  id={note._id}
                  title={note.title}
                  body={note.body}
                  handleToggle={handleToggle}
               />
               <button
                  className="btn btn-secondary ms-5"
                  style={{}}
                  onClick={handleToggle}
               >
                  cancel
               </button>
            </div>
         ) : (
            <div className="border border-4 my-3 p-3 bg-white">
               <h2
                  className="text-primary text-capitalize"
                  onClick={() => handleClick(note._id)}
               >
                  {note.title}
               </h2>
               <button className="btn btn-primary mx-1" onClick={handleToggle}>
                  edit
               </button>
               <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleRemove(note._id)}
               >
                  delete
               </button>
            </div>
         )}
      </>
   );
};

export default NotesItem;
