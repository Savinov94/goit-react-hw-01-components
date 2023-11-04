import user from '../json/user.json'
import css from './Profile.module.css'



const Profile = (props) => {
    return (
        <div className={css.profile} >
        <div className={css.discription}>
            <img
                src={user.avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{user.username}</p>
            <p className={css.tag}>{user.tag}</p>
            <p className={css.location}>{user.location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.statsList}>
                <span className={css.label}>Followers:</span>
                <span className={css.quantity}>{user.stats.followers}</span>
            </li>
            <li className={css.statsList}>
                <span className={css.label}>Views:</span>
                <span className={css.quantity}>{user.stats.views}</span>
            </li>
            <li className={css.statsList}>
                <span className={css.label}>Likes:</span>
                <span className={css.quantity}>{user.stats.likes}</span>
            </li>
        </ul>
        </div>
    )
}


export default Profile