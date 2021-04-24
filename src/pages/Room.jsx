import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

function connect(roomId) {
  return () => {
    const socket = io({
      path: '/api/socket.io',
    });
    socket.on('connect', () => {
      socket.emit('join', roomId);
    });
    return socket;
  };
}

export function Room() {
  const { roomId } = useParams();
  const [conn] = useState(connect(roomId));
  conn.send('yay');
  return <div>{roomId}</div>;
}
