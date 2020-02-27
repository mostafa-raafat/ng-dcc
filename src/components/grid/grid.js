// React imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import styled from "styled-components";

import ZoomToPointButton from '../button/button';

const AgGridContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Grid = props => {
    useEffect(() => {
        if (props.gridData.length === 0) {
            return;
        }
        console.log('test');
    }, [props.gridData]);

    const gridConfig = {
        "ag-column": [
            {
                "headerName": "Zoom", "field": "Zoom",
                cellRendererFramework: ZoomToPointButton
            },
            { "headerName": "Long", "field": "Longitude" },
            { "headerName": "Lat", "field": "Latitude" }

        ]
    }

    return (
        <Container>
            <AgGridContainer className="ag-theme-balham">
                <AgGridReact
                    reactNext={true}
                    columnDefs={gridConfig['ag-column']}
                    rowData={props.gridData}>
                </AgGridReact>
            </AgGridContainer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    mapView: state.map.mapView,
    gridData: state.grid.gridData
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(Grid)