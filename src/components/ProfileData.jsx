import '../css/style.css';
import profile from '../assets/images/image-jeremy.png';

function ProfileData({ activeTimeframe, setActiveTimeframe }) {
  const timeframes = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className="profile-div-data">
      <div className="pro-img">
        <img src={profile} alt="Jeremy Robson" />
        <div className="pro-text-wrapper">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="pro-nav">
        {timeframes.map((time) => (
          <a
            key={time}
            href={`#${time.toLowerCase()}`}
            className={activeTimeframe === time.toLowerCase() ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setActiveTimeframe(time.toLowerCase());
            }}
          >
            {time}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProfileData;