import React from 'react';
import HederServer from './HederServer';
import CountactServer from './CountactServer';
import ClockServer from './ClockServer';
import CountServer from './CountServer';
const Server = () => {
    return (
        <div>
          <HederServer/>
          <CountactServer/>
          <CountServer/>
          <ClockServer/>
        </div>
    );
}

export default Server;

