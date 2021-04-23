import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const STYLE = 'home-style';

function _Home({ className }) {
  return (
    <div className={clsx(className, 'jumbotron', 'bg-light')}>
      <h2 className="m-2">Join or create a room to play :)</h2>
      <div className="form-inline">
        <input className={clsx('form-control', STYLE)} placeholder="Room ID" />
        <button className={clsx('btn', 'btn-primary', STYLE)}>Join Room</button>
      </div>
      <hr />
      <div>
        <button className={clsx('btn', 'btn-primary', STYLE)}>Create Room</button>
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
