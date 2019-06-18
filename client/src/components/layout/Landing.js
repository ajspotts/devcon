import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Dev Network</h1>
          <p className='lead'>
            Connect with other developers to share industry knowledge and
            experience
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn'>
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
