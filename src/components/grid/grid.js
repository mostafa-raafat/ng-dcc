// React imports
import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import styled from "styled-components";

import ZoomToPointButton from '../button/button';

const AgGridContainer = styled.div`
  height: 200px;
  width: 50%;
`;

const Container = styled.div`
  display: flex;
`;

const KendoGridContainer = styled.div`
  width: 50%;
  height: 200px;
`;

const Grid = props => {

    const gridData = useSelector(state => state.grid.gridData);
    const mapView = useSelector(state => state.map.mapView);

    useEffect(() => {
        if (gridData.length === 0) {
            return;
        }
    }, [gridData]);

    useEffect(() => {
        window.$(document).ready(function () {
            window.$(document).ready(function () {
                window.$("#kendoGrid").kendoGrid({
                    dataSource: {
                        data: gridData,
                        pageSize: 20
                    },
                    height: 200,
                    columns: gridConfig['kendo-column']
                });
            });
        });
    });

    const zoomToPoint = (event) => {
        console.log('too', event, mapView);
        mapView.goTo({ target: [-118.24368, 34.05223], zoom: 15 });
        event.preventDefault();
    }

    const gridConfig = {
        "ag-column": [
            {
                "headerName": "Zoom", "field": "Zoom",
                cellRendererFramework: ZoomToPointButton
            },
            { "headerName": "Long", "field": "Longitude" },
            { "headerName": "Lat", "field": "Latitude" }

        ],
        "kendo-column": [
            { "field": "Longitude", "title": "Long" },
            { "field": "Latitude", "title": "Lat" },
            { command: { text: "Zoom", click: () => zoomToPoint(mapView) , title: "Zoom", width: "100px" } }
        ]
    }

    return (
        <Container>
            <AgGridContainer className="ag-theme-balham">
                <AgGridReact
                    reactNext={true}
                    columnDefs={gridConfig['ag-column']}
                    rowData={gridData}>
                </AgGridReact>
            </AgGridContainer>
            <KendoGridContainer id="kendoGrid"></KendoGridContainer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    mapView: state.map.mapView,
    gridData: state.grid.gridData
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(Grid)