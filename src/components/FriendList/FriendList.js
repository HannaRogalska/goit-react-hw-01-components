import PropTypes from 'prop-types';
import s from "./FriendList.module.css"
import { FriendItem } from './FriendsItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
