import { MovieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        loading: true,
        error: null
    };

    async componentDidMount() {
        try {
            const {
                data: {
                    results: nowPlaying
                }
            } = await MovieApi.nowPlaying();
            const {
                data: {
                    results: upcoming
                }
            } = await MovieApi.upcoming();
            const {
                data: {
                    results: popular
                }
            } = await MovieApi.popular();
            this.setState({
                nowPlaying: nowPlaying,
                upcoming: upcoming,
                popular: popular
            });
        } catch  {
            this.setState({error: "Can't find movie information."})
        } finally {
            this.setState({loading: false})
        }
    }

    render() {
        const {nowPlaying, upcoming, popular, loading, error} = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                loading={loading}
                error={error}/>
        );
    }
}