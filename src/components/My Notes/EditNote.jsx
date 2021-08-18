import React from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../../Redux/actions/notesAction';
import NoteForm from './NoteForm';

const EditNote = (props) => {
   const { id, title, body, handleToggle } = props;

   const dispatch = useDispatch();

   const formSubmission = (result) => {
      dispatch(editNote(result, id));
   };

   return (
      <div>
         <NoteForm
            title={title}
            body={body}
            formSubmission={formSubmission}
            handleToggle={handleToggle}
         />
      </div>
   );
};

export default EditNote;
