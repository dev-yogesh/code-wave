import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/editor/123', {
      state: {
        username: 'Yogesh'
      }
    });
  }

  return (
    <div>
      <form noValidate onSubmit={handleJoin}>
        <img src="" alt="logo" />
        <label htmlFor="room_id">Paste invitaion ROOM ID</label>
        <input id='room_id' type="text" placeholder='ROOM ID' />
        <input type="text" placeholder='USERNAME' />
        <button type='submit'>Join</button>

        <p>If you don't have an invite then create <span>new room</span></p>
      </form>

      <footer>Built by <Link to='/'>Yogesh</Link></footer>
    </div>
  )
}