import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const STYLE = 'home-style';

function createRoom() {
  return axios.post('/api/create/').then((response) => response.data.id);
}

function goToRoom({ roomId, push }) {
  if (!roomId) {
    return () => createRoom()
      .then((id) => push(`/rooms/${id}`));
  }
  return () => push(`/rooms/${roomId}`);
}

function _Home({ className }) {
  const { push } = useHistory();
  const [roomIdInput, setRoomID] = useState('');
  return (
    <div className={clsx(className, 'jumbotron', 'bg-light')}>

      <h2 className="m-2">Join or create a room to play :)</h2>

      <div className="form-inline">
        <input
          className={clsx('form-control', STYLE)}
          placeholder="Room ID"
          value={roomIdInput}
          onChange={(e) => setRoomID(e.target.value)}
        />

        <button
          className={clsx('btn', 'btn-primary', STYLE)}
          onClick={goToRoom({ roomId: roomIdInput, push })}
        >
          Join Room
        </button>
      </div>

      <hr />

      <div>
        <button
          className={clsx('btn', 'btn-primary', STYLE)}
          onClick={goToRoom({ push })}
        >
          Create Room

        </button>
      </div>
    </div>
  );
}

export const Home = styled(_Home)`
    .${STYLE} {
        width: 120px;
        margin: 5px;
    }
`;
