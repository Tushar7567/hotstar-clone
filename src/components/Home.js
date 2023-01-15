import React from 'react'
import styled from '@emotion/styled'
import Slider from './Slider'
import MoviesList from './MoviesList'
import Navbar from './Navbar'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <MoviesList />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: calc(100vh - 70px);
    background-color: black;
`
