import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import CardSmall from '../components/CardSmall';
import CardMediumA from '../components/CardMediumA';
import CardMediumB from '../components/CardMediumB';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>From the Depths</h1>
        <p>Welcome to your new Gatsby site. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>

    <div className="Cards">
    <h2>Portfolio</h2>
      <div className="CardGroup">
        <Card 
        title="Lorem Ipp Dipsum"
        text="Lorem Ipsum Dolor Amet"
        image={require('../myimages/giphy_home_red@2x.png')}/>
        <CardSmall
        title="GIPHY Stories"
        image={require('../myimages/giphy_stories_cover@2x.png')}/>
        <CardMediumA
        title="GIPHY Detail page"
        text="12 sections"
        image={require('../myimages/grid_medium.png')}/>
        <CardMediumB
        title="GIPHY for Facebook"
        text="12 sections"
        image={require('../myimages/grid_medium.png')}/>
      </div>
    </div>
  </div>
)

export default IndexPage

