import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service';
import { useState } from 'react'
export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.UserLogOut}>
    {/* <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div> */}
    <button className={styles.BtnSm} onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}