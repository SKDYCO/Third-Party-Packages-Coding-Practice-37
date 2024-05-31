// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

const status = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {apiStatus: status.initial, vacinationData: {}}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: status.loading})
    const response = await fetch(' https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok) {
      this.setState({apiStatus: status.success})
      const data = await response.json()
      const updatedData = {
        last7daysVaccination: data.last_7_days_vaccination.map(each => ({
          vaccineDate: each.vaccine_date,
          dose1: each.dose_1,
          dose2: each.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(genderType => ({
          count: genderType.count,
          gender: genderType.gender,
        })),
      }
      this.setState({vacinationData: updatedData})
    } else {
      this.setState({apiStatus: status.failure})
    }
  }

  renderSuccessView = () => {
    const {vacinationData} = this.state
    return (
      <>
        <VaccinationCoverage
          daysOfVaccination={vacinationData.last7daysVaccination}
        />
        <VaccinationByGender
          genderDetails={vacinationData.vaccinationByGender}
        />
        <VaccinationByAge divideByAgeGroup={vacinationData.vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <div>
      <h1>Something went wrong</h1>
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
    </div>
  )

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  getDetailsBasedOnAPIstatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case status.success:
        return this.renderSuccessView()
      case status.failure:
        return this.renderFailureView()
      case status.loading:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p className="logo-paragraph">Co-WIN</p>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        {this.getDetailsBasedOnAPIstatus()}
      </div>
    )
  }
}
export default CowinDashboard
