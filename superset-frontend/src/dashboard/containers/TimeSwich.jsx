
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TimeItemSwich from '../components/TimeItemSwich';
import { getFormDataFromControls } from 'src/explore/controlUtils';
import {
    updateDashboardType,
  } from 'src/dashboard/actions/timeSwich';
  import * as exploreActions from 'src/explore/actions/exploreActions';
  import * as chartActions from 'src/components/Chart/chartAction';

function mapStateToProps(state,ownProps) {
  const { 
    themSwichState ,
    charts,
    explore={},
  } = state
  console.log("容器内部",state,ownProps);
  const { controls={} , slice } = explore;
  const form_data = getFormDataFromControls(controls);
  const slice_id = form_data?.slice_id ?? slice?.slice_id ?? 0; // 0 - unsaved chart
  const chart = charts[slice_id] || {};
  
  return {
    ...themSwichState,
    chart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        updateDashboardType,
        ...exploreActions,
        ...chartActions,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeItemSwich);
