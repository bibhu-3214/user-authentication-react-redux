import React from 'react';

const Home = () => {
    return (
        <div className="container  w-75 text-center mt-5">
            <h4 className="text-black-50 mb-3">
                A user authentication app, where users can register and login. After Login only the
                Authenticated users can check their details. Then they can add their daily notes, this notes
                taking feature is intigrated with it. Authenticated users can do CRUD operations to create,
                delete and update their notes.
            </h4>
        </div>
    );
};

export default Home;
