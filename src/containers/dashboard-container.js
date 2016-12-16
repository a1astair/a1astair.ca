import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Dashboard from '../components/dashboard'

class PageDashboard extends Component {

  render() {
    return (
      <Dashboard
        year={this.props.year}
      />
    )
  }
}

PageDashboard.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    year: state.user.year
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDashboard)
