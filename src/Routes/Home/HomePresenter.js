import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Footer from "Components/Footer";
import Helmet from "react-helmet";

const Container = styled.div`
	padding: 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
	<div>
		<Helmet>
			<title>Movies | Nomflix</title>
		</Helmet>
		{
			loading
				? <Loader />
				: <div>
					<Container>
						{
							nowPlaying && nowPlaying.length > 0 && (
								<Section title="Now Playing">
									{
										nowPlaying.map(movie => (
											<Poster
												id={movie.id}
												imageUrl={movie.poster_path}
												title={movie.original_title}
												rating={movie.vote_average}
												year={movie
													.release_date
													.substr(0, 4)}
												isMovie={true} />
										))
									}
								</Section>
							)
						}
						{
							upcoming && upcoming.length > 0 && (
								<Section title="Upcoming">
									{
										upcoming.map(movie => (
											<Poster
												id={movie.id}
												imageUrl={movie.poster_path}
												title={movie.original_title}
												rating={movie.vote_average}
												year={movie
													.release_date
													.substr(0, 4)}
												isMovie={true} />
										))
									}
								</Section>
							)
						}
						{
							popular && popular.length > 0 && (
								<Section title="Popular">
									{
										popular.map(movie => (
											<Poster
												id={movie.id}
												imageUrl={movie.poster_path}
												title={movie.original_title}
												rating={movie.vote_average}
												year={movie
													.release_date
													.substr(0, 4)}
												isMovie={true} />
										))
									}
								</Section>
							)
						}
						{error && <Message text={error} color="#ed5942" />}
					</Container>
					<Footer />
				</div>
		}
	</div>
);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;