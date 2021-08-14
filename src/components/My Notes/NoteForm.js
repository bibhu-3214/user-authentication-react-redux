import React, { useState } from 'react';

const Mynotes = (props) => {
   const { formSubmission, handleToggle } = props;
   const [title, setTitle] = useState(props.title ? props.title : '');
   const [body, setBody] = useState(props.body ? props.body : '');

   const handleChange = (e) => {
      if (e.target.name === 'title') {
         setTitle(e.target.value);
      } else if (e.target.name === 'body') {
         setBody(e.target.value);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
         title: title,
         body: body,
      };

      formSubmission(formData);
      if (formSubmission) {
         setTitle('');
         setBody('');
      }

      if (handleToggle) {
         handleToggle();
      }
   };

   return (
      <div className="container">
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="formGroupExampleInput" className="form-label">
                  Title
               </label>
               <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="formGroupExampleInput" className="form-label">
                  Body
               </label>
               <textarea
                  className="form-control"
                  name="body"
                  value={body}
                  onChange={handleChange}
               ></textarea>
            </div>
            <input
               className="btn btn-primary mb-3"
               type="submit"
               value="save"
            />
         </form>
      </div>
   );
};

export default Mynotes;
