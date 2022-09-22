import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
      <h1>Contact Page</h1>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" placeholder="name"/>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" placeholder="name@example.com"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" rows="10" placeholder='Message to Travis'></textarea>
        </div>
      </form>
    </div>
  );
}
