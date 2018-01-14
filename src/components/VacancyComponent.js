import React, { Component } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

import TableButton from '../containers/ButtonContainer'
import WordsList from '../containers/WordsListContainer'
import VacancyList from '../containers/VacancyListContainer'
import { fetchAPI } from '../utils/fetchAPI'
import VacanciesData from '../utils/ListAPI'

class Vacancy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialized: false,
      loading: false,
      error: null,
      switchTable:false
    }
  }
  
  componentDidMount() {
    this.getVacancies()
  }
  
  getVacancies = async () => {
    this.setState({loading: true})
    const url = VacanciesData
    try{
      let response = await fetchAPI(url)
      const { metadata:{ categories_facets }, vacancies } = response
      this.setState({ 
        initialized: true,
        loading: false, 
        categories_facets, 
        vacancies })
    } catch(error) {
      this.setState({loading: false, error})
    }
  }
  

  handleSwitchOne = () => {
    this.setState({switchTable: false})
  }

  handleSwitchTwo = () => {
    this.setState({switchTable: true})
  }

  render() {
    const {categories_facets, vacancies, loading, error, initialized, switchTable} = this.state
    if (loading && !initialized) return <Loader active/>
    else if (error) return <div>Error: {error}</div>
    else if (!categories_facets) return <span/>
    return (
      <div>
        <Dimmer active={loading} inverted><Loader /></Dimmer>
        <TableButton
          oneTable = {this.handleSwitchOne}
          twoTable = {this.handleSwitchTwo}
          active = {switchTable}
        />
        {!switchTable ? 
        <VacancyList 
          rubric = {categories_facets}
        />:
        <WordsList
          words = {vacancies}
         />}
      </div>
    )
  }
}

export default Vacancy