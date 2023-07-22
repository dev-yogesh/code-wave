import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const navigate = useNavigate();
  const roomIdRef = useRef<HTMLInputElement>(null);

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!roomId || !username) {
      toast.error('roomid & username required');
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username
      }
    });
  }

  const handleNewRoom = () => {
    const uuid = uuidv4();
    setRoomId(uuid);

    roomIdRef.current?.focus();

    toast.success('New room created!');
  }

  return (
    <div>
      <form noValidate onSubmit={handleJoin}>
        <img src="" alt="logo" />
        <label htmlFor="room_id">Paste invitaion ROOM ID</label>
        <input id='room_id' ref={roomIdRef} type="text" placeholder='ROOM ID' value={roomId} onChange={(e) => setRoomId(e.target.value)} />
        <input type="text" placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type='submit'>Join</button>

        <p>If you don't have an invite then create <span onClick={handleNewRoom}>new room</span></p>
      </form>

      <footer>Built by <Link to='/'>Yogesh</Link></footer>
    </div>
  )
}