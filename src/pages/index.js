import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
	grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = ({ data }) => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>UXUI <br />Designer</h1>
        <p>Welcome to my site</p>
        <Link to="/page-2/">Watch the video 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <Card data={data} />
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 sectopm - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map((cell, idx) => (
        <Cell
          key={`cell-${idx}`}
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteProjectsQuery {
    allContentfulProjects (sort: { fields: [createdAt], order:ASC }) {
      edges {
        node {
          image {
            file {
              url
            }
          }
          title
          text
          createdAt
        }
      }
    }
  }
`