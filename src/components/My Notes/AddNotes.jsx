import React from 'react';
import NoteForm from './NoteForm';
import { useDispatch } from 'react-redux';
import { addNotes } from '../../Redux/actions/notesAction';

const AddNotes = (props) => {
   const dispatch = useDispatch();

   const formSubmission = (formData) => {
      dispatch(addNotes(formData));
   };

   return (
      <div>
         <NoteForm formSubmission={formSubmission} />
      </div>
   );
};

export default AddNotes;
