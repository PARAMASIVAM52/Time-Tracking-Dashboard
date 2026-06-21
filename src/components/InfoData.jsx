import '../css/style.css';
import ellipse from '../assets/images/icon-ellipsis.svg';
import dashboardData from '../../data.json';

function InfoData({ timeframe = "weekly" }) {
    const labelAdapter = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month"
    };

    const getSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="info-div-data">
            {dashboardData.map((item) => {
                const slug = getSlug(item.title);
                const currentHours = item.timeframes[timeframe].current;
                const previousHours = item.timeframes[timeframe].previous;

                return (
                    <div key={slug} className={`info-block ${slug}`}>
                        <div className="info-content">

                            <div className="in-con-head">
                                <p>{item.title}</p>
                                <img src={ellipse} className="ellipsis-icon" alt="Options" height={5} width={15} />
                            </div>

                            <div className="time-stat-box">
                                <h1>{currentHours}hrs</h1>
                                <p className="previous-stat">
                                    {labelAdapter[timeframe]} - {previousHours}hrs
                                </p>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default InfoData;