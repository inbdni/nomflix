import { MovieApi, TvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
	constructor(props) {
		super(props);
		const { location: {
			pathname
		} } = props;
		this.state = {
			result: null,
			loading: true,
			error: null,
			isMovie: pathname.includes("/movie/"),
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: {
					id
				}
			},
			history: {
				push
			}
		} = this.props;
		const { isMovie, isTv } = this.state;
		const parsedId = parseInt(id);
		if (isNaN(parsedId)) {
			return push("/");
		}
		let result;
		try {
			if (isMovie) {
				({ data: result } = await MovieApi.movieDetail(parsedId));
			} else {
				({ data: result } = await TvApi.tvDetail(parsedId));
			}
		} catch {
			this.setState({ error: "Can't find anything." });
		} finally {
			this.setState({ loading: false, result })
		}
	}

	render() {
		const { result, loading, error } = this.state;
		console.log(this.state);
		return (<DetailPresenter result={result} loading={loading} error={error} />);
	}
}