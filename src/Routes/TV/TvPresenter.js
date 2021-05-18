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
`;

const TvPresenter = ({topRated, popular, airingToday, loading, error}) => (
    <div>
    <Helmet>
        <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading
    ? <Loader/>
    : <div><Container>
        {
            topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {
                            topRated.map(show => (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show
                                        .first_air_date
                                        .substring(0, 4)}/>
                            ))
                    }
                </Section>
            )
        }
        {
            popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {
                            popular.map(show => (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show
                                        .first_air_date
                                        .substring(0, 4)}/>
                            ))
                    }
                </Section>
            )
        }
        {
            airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    {
                        airingToday.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.original_name}
                                rating={show.vote_average}
                                year={show
                                    .first_air_date
                                    .substring(0, 4)}/>
                        ))
                    }
                </Section>
            )
        }
        {error && <Message text={error} color="#ed5942"/>}
    </Container>
    <Footer/></div>}</div>);

TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TvPresenter;