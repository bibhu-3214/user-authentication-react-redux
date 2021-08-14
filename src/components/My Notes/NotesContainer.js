import React from 'react';
import AddNotes from './AddNotes';
import NotesList from './NotesList';

const NotesContainer = () => {
   return (
      <div className="container px-4 mt-5 mb-5">
         <div className="row gx-5">
            <div className="col">
               <div className="p-3 border bg-light">
                  <h1 className="diplay-5">NoteLists</h1>
                  <NotesList />
               </div>
            </div>
            <div className="col">
               <div className="p-3 border bg-light">
                  <h1 className="diplay-5 text-center">Add Notes</h1>
                  <AddNotes />
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotesContainer;
