import React, {useEffect, useRef, useState} from 'react';
import {select, Selection} from 'd3-selection';
import {scaleLinear, scaleBand} from "d3-scale";
import {axisLeft, axisBottom} from "d3-axis";
import {simpleDataSet, measurements, margin} from "../../data/data"

export const BasicChart = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [selection, setSelection] = useState<null | Selection<HTMLDivElement | null, unknown, null, undefined>>(null)

    const yScale = scaleLinear()
        .domain([0, 100])
        .range([ measurements.height, 0])

    const xScale = scaleBand()
        .domain(simpleDataSet.map(d => d.brand))
        .range([0, measurements.width])
        .paddingOuter(0.3)

    const yAxis = axisLeft(yScale).ticks(2)
    const xAxis = axisBottom(xScale).tickSize(0)

    useEffect(() => {
        if (!selection) setSelection(select(ref.current))
        else {

            const svg = selection.append('svg')
                .attr('width', measurements.width + margin.left + margin.right)
                .attr('height', measurements.height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

            svg.append('g')
                .call(yAxis)

            svg.append('g')
                .call(xAxis)
                .attr("transform", `translate(0, ${measurements.height})`)

            svg.append('g')
                .attr('transform', `translate(0, ${margin.top})`)
                .attr('fill', 'red')
                .selectAll('rect')
                .data(simpleDataSet)
                .enter()
                .append('rect')
                .attr('width', xScale.bandwidth)
                .attr('height', d => measurements.height - yScale(d.keyValue))
                .attr('x', d => xScale(d.brand)!)
                .attr('y', d => yScale(d.keyValue) - margin.top)

        }
    }, [selection])
    return <div ref={ref}></div>
}
