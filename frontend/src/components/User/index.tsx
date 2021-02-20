import React from 'react';
import './styles.css'

interface IUser {
    name: string;
    email: string;
  }

  interface Props {
    user: IUser;
  }

const User:  React.FC<Props> = ({ user }) => {
    return (
        <div className="item">
            <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>
        </div>
    )
}

export default User