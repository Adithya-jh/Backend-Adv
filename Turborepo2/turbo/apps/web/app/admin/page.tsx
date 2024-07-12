import React from 'react';
import { Button } from '@repo/ui/button';

import Notif from '@repo/ui/notif';
function Admin() {
  return (
    <div>
      <div>
        <Button>Admin</Button>
        <Notif />
      </div>
    </div>
  );
}

export default Admin;
