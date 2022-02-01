import {dataSet} from "./data/data";
import {scaleOrdinal} from "d3-scale";
import {Colors} from "./constants";

export const categories = dataSet.map(d => d.key)

export const brandNames = dataSet[0].values.map(d => d.brand)

export const colors = scaleOrdinal().range([Colors.RED, Colors.BLUE, Colors.ORANGE])
