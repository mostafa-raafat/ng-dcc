import React from 'react'
import { connect } from 'react-redux';


const ZoomToPointButton = React.forwardRef((props, ref) => {
    const zoomToPoint = () => {
        props.mapView.goTo({ target: [props.data.Longitude, props.data.Latitude], zoom: 15 });
        props.increment();
        props.incrementCart();
    }
    return (
        <div>
            <button onClick={zoomToPoint} ref={ref}>Zoom</button>
        </div>
    )
})

const mapStateToProps = (state) => ({
    mapView: state.map.mapView,
    gridData: state.grid.gridData
});

const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch({ type: 'INCREMENT_LONG' }),
      incrementCart: () => dispatch({ type: 'INCREMENT_CHART' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(ZoomToPointButton)