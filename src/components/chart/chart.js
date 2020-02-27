// React imports
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const KendoChart = styled.div`
    height: 100%;
    width: 100%;
`;

const Chart = props => {

    const charData = useSelector(state => state.chart.charData);

    useEffect(() => {
        window.$(document).ready(function () {
            window.$("#chart").kendoChart({
                title: {
                    text: "Kendo Chart Example"
                },
                series: [{
                    name: "Example Series",
                    data: charData
                }],
                categoryAxis: {
                    categories: [2000, 2001, 2002, 2003]
                }
            });
        });
    }, [charData]);

    return (
        <Container>
            <KendoChart id="chart"></KendoChart>
        </Container>
    );
}

export default Chart;