import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import SingelLaunch from "./SingelLaunch";
import Loading from "./Loading";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export default function Launches() {
    return (
        <Query query={LAUNCHES_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <Loading />;;
                if (error) console.log(error);
                let launches = data.launches.map((launch) => {
                    let flight_number = launch.flight_number;
                    let link = `/launch/${flight_number}`;
                    return (
                        <div className="launch">
                            <SingelLaunch key={flight_number} launch={launch} />
                            <Link to={link}>
                                <button>Details</button>
                            </Link>
                        </div>
                    );
                });
                return launches;
            }}
        </Query>
    );
}
