import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import RecipeCard from '../RecipeCard';

import "./RecipeBoard.css";


class RecipeBoard extends Component {
    state = {
        recipes: []
    }   

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = () => {
        API.getRecipes()
         .then(res => {
            this.setState({
                recipes: res.data
            })
             
            console.log('get route allrecipes worked')
            console.log(this.state.recipes)
         })
         .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="recipeBoard">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h2 className='recipeHeader'>
                                Top Recipes
                            </h2>
                        </Col>
                    </Row>
                    {this.state.recipes.map(recipe => (
                        <Row key={recipe._id}>
                            <Col sm={12} md={12}>
                                <RecipeCard
                                    id={recipe._id}
                                    name={recipe.name}
                                    style={recipe.style}
                                    abv={recipe.specs.abv}
                                    batchSize={recipe.specs.batch.size}
                                    batchUnits={recipe.specs.batch.units}
                                    ibu={recipe.specs.ibu}
                                    fg={recipe.specs.fg}
                                    brewer={recipe.brewer.username}
                                    brewerFirstName={recipe.brewer.name.first}
                                    brewerLastName={recipe.brewer.name.last}
                                    description={recipe.description}
                                />
                            </Col>
                        </Row>
                    ))}
                </Grid> 
            </div>
        )
    }
}

export default RecipeBoard;