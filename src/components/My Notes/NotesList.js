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
      <div>
         {notes.length === 0 ? (
            <div>
               <h4 className="display-5">No Notes found...</h4>
               <h5 className="diplay-6">Add your first Notes !</h5>
            </div>
         ) : (
            <div>
               {notes.map((note, id) => {
                  return <NotesItem key={id} {...note} />;
               })}
            </div>
         )}
      </div>
   );
};

export default NotesList;
