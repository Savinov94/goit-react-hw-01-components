import friends from '../json/friends.json';
import css from './FriendList.module.css'

const FriendList = (props) => {
return (
        friends.map((friends) => (
            <section key={friends.id} className={css.friendSection}>
                <ul className={css.friendList}>
                    <li className={css.friendsItem}>
                        <span className={`${css.active} ${friends.isOnline === true ? css.friendOnline : css.friendOffline}`}>{friends.isOnline}</span>
                        <span>
                            <img
                                src={friends.avatar}
                                alt="Friend avatar"
                                className={css.avatar} />
                        </span>
                        <span className={css.friendsName}>{friends.name}</span>
                    </li>
                </ul>
            </section>
            )
    
    ))
};

export default FriendList;