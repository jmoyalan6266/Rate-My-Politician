import { Container, ButtonGroup, ToggleButton } from "react-bootstrap";
import { ResponsiveChoropleth} from "@nivo/geo";
import features from "./visualizationData/us_states.json";
import useStates from "../../hooks/useStates";
import { ResponsiveFunnel } from "@nivo/funnel";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import employees from "./visualizationData/employees.json";
import offices from "./visualizationData/politician_offices.json";
import sectors from "./visualizationData/stock_sector.json";
import contracts_by_state from "./visualizationData/contracts_by_state.json";
import candidate_contributions from "./visualizationData/candidate_contributions.json";
import { useState } from "react";

const Visualizations = () => {
    const { allStates } = useStates();
    const [radioValue, setRadioValue] = useState(1);
    const radios = [
        { name: "Our Visualizations", value: 1 },
        { name: "Provider Visualizations", value: 2 },
    ];

    return (
        <Container className="my-4">
            <center>
                <ButtonGroup toggle className="mb-4">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                                setRadioValue(radio.value)
                            }
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </center>
            {radioValue != 2 ? (
                <div>
                    <center>
                        <h1>Our Visualizations</h1>
                    </center>
                    <h3>Median Income by State</h3>
                    <div style={{ height: "500px" }}>
                        <ResponsiveChoropleth
                            data={allStates.map((state, i) => ({
                                ...state,
                                id: state.index + 1,
                            }))}
                            features={features.features}
                            projectionType="stereographic"
                            projectionScale={1300}
                            projectionTranslation={[0.5, 0.7]}
                            colors="nivo"
                            domain={[44000, 84000]}
                            label="properties.name"
                            value="median_income"
                            valueFormat=".2s"
                            borderWidth={0.5}
                            borderColor="#152538"
                            legends={[
                                {
                                    anchor: "bottom-left",
                                    direction: "column",
                                    justify: true,
                                    translateX: 20,
                                    translateY: -100,
                                    itemsSpacing: 0,
                                    itemWidth: 94,
                                    itemHeight: 18,
                                    itemDirection: "left-to-right",
                                    itemTextColor: "#444444",
                                    itemOpacity: 0.85,
                                    symbolSize: 18,
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemTextColor: "#000000",
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                    <h3>Number of Employees for News Sources</h3>
                    <div style={{ height: "500px" }}>
                        <ResponsiveFunnel
                            data={employees}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                            valueFormat=">-.4s"
                            colors={{ scheme: "spectral" }}
                            borderWidth={20}
                            labelColor={{
                                from: "color",
                                modifiers: [["darker", 3]],
                            }}
                            beforeSeparatorLength={100}
                            beforeSeparatorOffset={20}
                            afterSeparatorLength={100}
                            afterSeparatorOffset={20}
                            currentPartSizeExtension={10}
                            currentBorderWidth={40}
                            motionConfig="molasses"
                        />
                    </div>
                    <h3>Offices for Politicians</h3>
                    <div style={{ height: "500px" }}>
                        <ResponsivePie
                            data={offices}
                            margin={{
                                top: 40,
                                right: 80,
                                bottom: 80,
                                left: 80,
                            }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            colors={{ scheme: "paired" }}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            arcLinkLabelsSkipAngle={10}
                            arcLinkLabelsTextColor="#333333"
                            arcLinkLabelsThickness={2}
                            arcLabelsSkipAngle={10}
                            legends={[
                                {
                                    anchor: "bottom",
                                    direction: "row",
                                    justify: false,
                                    translateX: 0,
                                    translateY: 56,
                                    itemsSpacing: 25,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: "#999",
                                    itemDirection: "left-to-right",
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: "circle",
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemTextColor: "#000",
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <center>
                        <h1>Provider Visualizations</h1>
                    </center>
                    <h3>Number of Stocks by Sector</h3>
                    <div style={{ height: "500px" }} className="mb-5">
                        <ResponsiveBar
                            data={sectors}
                            keys={["Number of Stocks"]}
                            indexBy="sector"
                            margin={{
                                top: 50,
                                right: 130,
                                bottom: 50,
                                left: 60,
                            }}
                            padding={0.3}
                            valueScale={{ type: "linear" }}
                            indexScale={{ type: "band", round: true }}
                            colors={{ scheme: "pastel1" }}
                            borderColor={{
                                from: "color",
                                modifiers: [["darker", 1.6]],
                            }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "Sector",
                                legendPosition: "middle",
                                legendOffset: 45,
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "Number of Stocks",
                                legendPosition: "middle",
                                legendOffset: -45,
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{
                                from: "color",
                                modifiers: [["darker", 1.8]],
                            }}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                    <h3>Number of Contracts by State</h3>
                    <div style={{ height: "500px" }}>
                        <ResponsiveChoropleth
                            data={contracts_by_state}
                            features={features.features}
                            projectionType="stereographic"
                            projectionScale={1300}
                            projectionTranslation={[0.5, 0.7]}
                            colors="reds"
                            domain={[0, 597]}
                            label="properties.name"
                            valueFormat=".2s"
                            borderWidth={0.5}
                            borderColor="#152538"
                            legends={[
                                {
                                    anchor: "bottom-left",
                                    direction: "column",
                                    justify: true,
                                    translateX: 20,
                                    translateY: -100,
                                    itemsSpacing: 0,
                                    itemWidth: 94,
                                    itemHeight: 18,
                                    itemDirection: "left-to-right",
                                    itemTextColor: "#444444",
                                    itemOpacity: 0.85,
                                    symbolSize: 18,
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemTextColor: "#000000",
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                    <h3>Number of Politicians by Campaign Contributions</h3>
                    <div style={{ height: "500px" }}>
                        <ResponsivePie
                            data={candidate_contributions}
                            margin={{
                                top: 40,
                                right: 80,
                                bottom: 80,
                                left: 80,
                            }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            colors={{ scheme: "blues" }}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            arcLinkLabelsSkipAngle={10}
                            arcLinkLabelsTextColor="#333333"
                            arcLinkLabelsThickness={2}
                            arcLabelsSkipAngle={10}
                            legends={[
                                {
                                    anchor: "bottom",
                                    direction: "row",
                                    justify: false,
                                    translateX: 0,
                                    translateY: 56,
                                    itemsSpacing: 10,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: "#999",
                                    itemDirection: "left-to-right",
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: "circle",
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemTextColor: "#000",
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
            )}
        </Container>
    );
};
export default Visualizations;
