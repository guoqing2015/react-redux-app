import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Map} from 'immutable';
import moment from 'moment';
import {createStructuredSelector} from 'reselect';
import cx from 'classnames';
import {urls} from 'setting';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { isEmpty, isMobile, isZip} from 'utils/validation';

import Button from 'components/Button';
import Icon from 'components/Icon';
import {ToastContainer, toast} from 'components/Toast';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import {FlexBox, FlexBoxAlignCenter, Flex} from 'components/FlexLayout';
import Toggle from 'components/Toggle';


import {queryProvinces, queryCitys, queryCountys, setProvince, setCity, setCounty} from '../../redux/modules/Area/modules/actions';
import {makeSelectProvinces, makeSelectCitys, makeSelectCountys, makeSelectLoading, makeSelectError,makeSelectLocation } from '../../redux/modules/Area/modules/selectors';
import reducer from '../../redux/modules/Area/modules/reducer';
import saga from '../../redux/modules/Area/modules/saga';

import {app} from 'setting';

import './index.scss';

export class AreaPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    };

    this.selectProvince = this.selectProvince.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.selectCounty = this.selectCounty.bind(this);
    this.setStep = this.setStep.bind(this);

  }

  componentDidMount() {
    if (!this.props.provinces) {
      this.props.queryProvinces(51);
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  setStep(num) {
    this.setState({
      step: num
    })
  }

  selectProvince(provice) {
    this.props.setProvince({
        name: provice.Text,
        id: provice.Value,
    });
    this.props.queryCitys(provice.Value);
    this.setStep(2)
  }

  selectCity(city) {
    this.props.setCity({
      name: city.Text,
      id: city.Value,
    })
    this.props.queryCountys(city.Value);
    this.setStep(3)
  }

  selectCounty(county) {
    this.props.setCounty({
      name: county.Text,
      id: county.Value,
    })
    this.props.history.goBack();
  }

  render() {
    const {loading, provinces, citys, countys, location} = this.props;
    const { modal, step } = this.state;

    return (
      <div>
        <Helmet>
          <title>所在地区</title>
          <meta name="description" content="所在地区"/>
        </Helmet>

        {
          step == 1 && provinces &&
          <div className="location">
            <h4>省</h4>
            <ul className="location-list no-margin">
              {
                provinces.map((item, index) => (
                  <li key={`province-${index}`} onClick={() => {this.selectProvince(item)}}>{item.Text}</li>
                ))
              }
            </ul>
          </div>
        }

        {
          step != 1 &&
          <div className="location">
            <ul className="tab-location">
              <li id="li_province" onClick={()=>{this.setStep(1)}}>{location.get('provincename')}</li>
              <li id="li_city"  onClick={()=>{this.setStep(2)}} className={cx({ 'current': step == 2 })} >{location.get('cityname') || '请选择市' }</li>
              <li id="li_county"  className={cx({ 'current': step == 3 })} >请选择区县</li>
            </ul>

            {
              step == 2 &&
              <ul className="location-list">
                {
                  citys && citys.map((item, index) => (
                    <li key={`city-${index}`} onClick={() => {this.selectCity(item)}}>{item.Text}</li>
                  ))
                }
              </ul>
            }

            {
              step == 3 &&
              <ul className="location-list">
                {
                  countys && countys.map((item, index) => (
                    <li key={`county-${index}`} onClick={() => {this.selectCounty(item)}}>{item.Text}</li>
                  ))
                }
              </ul>
            }
          </div>
        }


        <ToastContainer />
        <Loader active={loading}/>
        <Modal {...modal} close={
        ()=>{this.setState({ modal: { ...this.state.modal, isOpen: false }})
       }
        }></Modal>

      </div>
    );
  }
}

AreaPage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  provinces: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  queryProvinces: PropTypes.func,
  queryCitys: PropTypes.func,
  queryCountys: PropTypes.func,
  setProvince: PropTypes.func,
  setCity: PropTypes.func,
  setCounty: PropTypes.func,
  location: PropTypes.object
};


const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  provinces: makeSelectProvinces(),
  citys: makeSelectCitys(),
  countys: makeSelectCountys(),
  location: makeSelectLocation()
});


export function mapDispatchToProps(dispatch) {
  return {
    queryProvinces: (param) => {
      dispatch(queryProvinces(param));
    },
    queryCitys: (param) => {
      dispatch(queryCitys(param));
    },
    queryCountys: (param) => {
      dispatch(queryCountys(param));
    },
    setProvince: (param) => {
      dispatch(setProvince(param));
    },
    setCity: (param) => {
      dispatch(setCity(param));
    },
    setCounty: (param) => {
      dispatch(setCounty(param));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AreaPage);
