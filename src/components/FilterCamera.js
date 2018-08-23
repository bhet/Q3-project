import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { filterCameras } from '../redux/action/cameraAction';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


class FilterCamera extends Component {
  render () {
    console.log(" Filtercamera in filterinput ", this.props.filterCameras)
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by Name:</Label>
          <Input type="text" name="email" id="filter-field" onChange={e => this.props.filterCameras(e.target.value)} />
        </FormGroup>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  filterCameras
}, dispatch)

export default connect(null, mapDispatchToProps)(FilterCamera);
