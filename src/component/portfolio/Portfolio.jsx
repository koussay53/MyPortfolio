import React from 'react'
import './portfolio.css'
import port3 from '../../assets/port3.PNG' 

const data =[
    {
        id:1,
        Image: port3,
        title: 'This is a portfolio title',
        github:'https://github.com/koussay53/Responsive_Project_CSS_Layout'
    },
    {
        id:2,
        Image: port3,
        title: 'This is a portfolio title',
        github:'https://github.com/koussay53/Responsive_Project_CSS_Layout'
    },
    {
        id:3,
        Image: port3,
        title: 'This is a portfolio title',
        github:'https://github.com/koussay53/Responsive_Project_CSS_Layout'
    },
    {
        id:4,
        Image: port3,
        title: 'This is a portfolio title',
        github:'https://github.com/koussay53/Responsive_Project_CSS_Layout'
    },
    {
        id:5,
        Image: port3,
        title: 'This is a portfolio title',
        github:'https://github.com/koussay53/Responsive_Project_CSS_Layout'
    },
    {
        id:6,
        Image: port3,
        title: 'This is a portfolio title',
        github:'https://github.com/koussay53/Responsive_Project_CSS_Layout'
    },
]

const Portfolio = () => {
  return (
    <section id='services'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
             {
                 data.map(({id,Image , title ,github})=>{
                     return(
                        <article key={id} className='portfolio_item'>
                        <div className='protfolio_item-image'>
                            <img src={Image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio_item-cta'>
                        <a href={github} className='btn' target='_blank'>Github</a>
                        </div>
                     </article>
                     )
                 })
             }
        </div>

    </section>
  )
}

export default Portfolio