import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendsItem}>
      <span
        className={`${css.active} ${
          isOnline === true ? css.friendOnline : css.friendOffline
        }`}
      >
        {isOnline}
      </span>
      <span>
        <img src={avatar} alt="Friend avatar" className={css.avatar} />
      </span>
      <span className={css.friendsName}>{name}</span>
    </li>
  );
};

export default FriendListItem;
