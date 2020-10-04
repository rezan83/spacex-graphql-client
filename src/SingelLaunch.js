import React from "react";
import dayjs from "dayjs";

export default function SingelLaunch({ launch }) {
    return (
        <div>
            <h3>Mission: {launch.mission_name}</h3>
            <h5>
                Date:{" "}
                {dayjs(launch.launch_date_local).format("DD/MM/YYYY hh:mm")}
            </h5>
            {launch.rocket && (
                <>
                    <h3>Rocket: {launch.rocket.rocket_name}</h3>
                 
                    <h5>
                        Rocket Id: {launch.rocket.rocket_id}
                    </h5>
                    <h5>Rocket Type: {launch.rocket.rocket_type}</h5>
                </>
            )}
            <p>
                State:
                {launch.launch_success ? (
                    <span className="success">success</span>
                ) : (
                    <span className="fail">fail</span>
                )}
            </p>
        </div>
    );
}
