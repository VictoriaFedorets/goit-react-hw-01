import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.profInfo}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsNumber}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsNumber}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsNumber}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
