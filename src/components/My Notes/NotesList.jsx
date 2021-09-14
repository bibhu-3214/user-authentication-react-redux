import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../Redux/actions/notesAction';
import NotesItem from './NotesItem';

const NotesList = (props) => {
   const notes = useSelector((state) => state.notes);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getNotes());
   }, [dispatch]);

   return (
      <>
         {notes.length === 0 ? (
            <>
               <h4 className="display-5">No Notes found...</h4>
               <h5 className="diplay-6">Add your first Notes !</h5>
            </>
         ) : (
            <>
               {notes.map((note, id) => {
                  return <NotesItem key={id} {...note} />;
               })}
            </>
         )}
      </>
   );
};

export default NotesList;
