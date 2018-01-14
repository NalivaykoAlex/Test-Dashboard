import model from './modelAPI'

const api = 'https://api.zp.ru/v1/vacancies/?'
const vacancies = `${api}average_salary=${model.average_salary}&categories_facets=${model.categories_facets}&geo_id=${model.geo_id}&highligh=${model.highlight}&period=${model.period}&search_type=${model.search_type}`

export default vacancies