import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";
import SingelLaunch from "./SingelLaunch";
import Loading from "./Loading";

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            rocket {
                rocket_id
                rocket_type
                rocket_name
            }
        }
    }
`;

export default function Launch() {
    let { flight_number } = useParams();
    flight_number = parseInt(flight_number);
    return (
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
            {({ error, loading, data }) => {
                if (loading) return <Loading />;
                if (error) console.log(error);
                let { launch } = data;
                return (
                    <div className="launch">
                        <SingelLaunch launch={launch} />
                    </div>
                );
            }}
        </Query>
    );
}
