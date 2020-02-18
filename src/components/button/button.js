import React from 'react'
import { connect } from 'react-redux';


const ZoomToPointButton = React.forwardRef((props, ref) => {
    const zoomToPoint = () => {
        props.mapView.goTo({ target: [props.data.Longitude, props.data.Latitude], zoom: 15 });
    }
    return (
        <div>
            <button onClick={zoomToPoint} ref={ref}>Zoom</button>
        </div>
    )
})

const mapStateToProps = (state) => ({
    mapView: state.map.mapView
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(ZoomToPointButton)