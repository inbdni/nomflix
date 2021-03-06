import React from "react";
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
	min-height: calc(100vh - 160px);
`;

const Form = styled.form`
	margin-bottom: 50px;
	display: block;
	background-color: #222222;
`;

const Input = styled.input`
	all: unset;
	font-size: 24px;
	width: 80%;
	padding: 10px;
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	searchTerm,
	updateTerm,
	handleSubmit,
	loading,
	error
}) => (
	<div>
		<Helmet>
			<title>Search | Nomflix</title>
		</Helmet>
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder="Search Movies or TV Shows..."
					value={searchTerm}
					onChange={updateTerm} />
			</Form>
			{
				loading
					? <Loader />
					: (
						<div>
							{
								movieResults && movieResults.length > 0 && (
									<Section title="Movie Results">
										{
											movieResults.map(movie => (
												<Poster
													key={movie.id}
													id={movie.id}
													imageUrl={movie.poster_path}
													title={movie.original_title}
													rating={movie.vote_average}
													year={movie
														.release_date && movie
															.release_date
															.substring(0, 4)}
													isMovie={true} />
											))
										}
									</Section>
								)
							}
							{
								tvResults && tvResults.length > 0 && (
									<Section title="TV Show Results">
										{
											tvResults.map(show => (
												<Poster
													key={show.id}
													id={show.id}
													imageUrl={show.poster_path}
													title={show.original_name}
													rating={show.vote_average}
													year={show
														.first_air_date && show
															.first_air_date
															.substring(0, 4)} />
											))
										}
									</Section>
								)
							}
							{error && <Message text={error} color="#ed5942" />}
							{movieResults && movieResults.length === 0 && tvResults && tvResults.length === 0 && <Message text="Nothing Found" color="#95a5a6" />}
						</div>
					)
			}
		</Container>
		<Footer />
	</div>
)

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	updateTerm: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default SearchPresenter;