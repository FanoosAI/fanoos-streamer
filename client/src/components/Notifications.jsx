import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3 style={{color: "red"}}>{call.name} در حال تماس </h3>
          <Button variant="contained" color="primary" onClick={answerCall}>
            پاسخ
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
