import { TvApi } from "api";
import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		loading: true,
		error: null
	};

	async componentDidMount() {
		try {
			const {
				data: {
					results: topRated
				}
			} = await TvApi.topRated();
			const {
				data: {
					results: popular
				}
			} = await TvApi.popular();
			const {
				data: {
					results: airingToday
				}
			} = await TvApi.airingToday();
			this.setState({
				topRated,
				popular,
				airingToday
			});
		} catch {
			this.setState({ error: "Can't find TV information." })
		} finally {
			this.setState({ loading: false })
		}
	}
	render() {
		const { topRated, popular, airingToday, loading, error } = this.state;
		console.log(this.state);
		return (
			<TvPresenter
				topRated={topRated}
				popular={popular}
				airingToday={airingToday}
				loading={loading}
				error={error} />
		);
	}
}