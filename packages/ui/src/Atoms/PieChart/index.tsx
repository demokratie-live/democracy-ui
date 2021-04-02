import React from "react";
import { Platform } from "react-native";
import { arc, pie } from "d3";
import { PieArcDatum } from "d3-shape";
import { G, Path, Svg } from "react-native-svg";

export interface ChartEntry {
  name: string;
  value: number;
  color: string;
  highlight?: boolean;
}

interface Props {
  size: number;
  data: ChartEntry[];
}

export const PieChart: React.FC<Props> = ({ size, data }) => {
  const pieObj = pie<ChartEntry>().value((d) => d.value);

  const arcs = pieObj(data);

  const paths = arcs.map((value) => {
    const path = arc<PieArcDatum<ChartEntry>>()
      .outerRadius(
        size / 2 - size / 10 + (value.data.highlight ? size / 10 : 0)
      )
      .innerRadius(0)(value);
    //
    return path;
  });

  const viewBox =
    Platform.OS === "web"
      ? `-${size / 2} -${size / 2} ${size} ${size}`
      : undefined;

  return (
    <Svg
      width={size}
      height={size}
      style={{ flex: 1, alignSelf: "stretch" }}
      viewBox={viewBox}
    >
      <G x={size / 2} y={size / 2}>
        {paths.map((item, i) =>
          item ? (
            <Path
              key={data[i].name}
              fill={data[i].color}
              strokeWidth={size / 100}
              d={item}
            />
          ) : null
        )}
      </G>
    </Svg>
  );
};
