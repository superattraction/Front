import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function AnalysisOverview() {
  const [seriesNb, setSeriesNb] = React.useState(1);
  const [itemNb, setItemNb] = React.useState(4);

  const handleSeriesNbChange = (newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
      />

      <div className="flex items-center justify-center mt-4">
        <ButtonGroup aria-label="series number selection">
          <Button
            variant={seriesNb === 1 ? "contained" : "outlined"}
            onClick={() => handleSeriesNbChange(1)}
          >
            긍정 평가
          </Button>
          <Button
            variant={seriesNb === 2 ? "contained" : "outlined"}
            onClick={() => handleSeriesNbChange(2)}
          >
            부정 평가 추가
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
}

const highlightScope = {
  highlighted: "series",
  faded: "global",
};

const series = [
  {
    label: "긍정 평가 (Positive Score)",
    data: [
      2423, 2210, 764, 1879, 1478,
      // 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      // 1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
  {
    label: "부정 평가 (Negative Score)",
    data: [
      2362, 2254, 1962, 1336, 586,
      // 1069, 2194, 1629, 2173, 2031, 1757, 862,
      // 2446, 910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
].map((s) => ({ ...s, highlightScope }));
