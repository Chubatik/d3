import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { select, Selection } from 'd3-selection'
import {scaleLinear, scaleBand} from 'd3-scale'
import { axisLeft, axisBottom } from 'd3-axis'
import { dataSet } from './data/data'
import {margin, measurements} from './constants'
import {brandNames, categories, colors} from './utils'

export const App = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [selection, setSelection] = useState<null | Selection<HTMLDivElement | null, unknown, null, undefined>>(null)

    const x0 = scaleBand()
        .rangeRound([0, measurements.width])
        .paddingInner(0.03)


    const x1 = scaleBand()
    const y = scaleLinear().range([measurements.height, 0])

    const xAxis = axisBottom(x0).tickSize(0)
    const yAxis = axisLeft(y).ticks(1).tickSize(0)

    useEffect(() => {
        if (!selection) setSelection(select(ref.current))
        else {

            const svg = selection.append('svg')
                .attr('width', measurements.width + margin.left + margin.right)
                .attr('height', measurements.height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

            x0.domain(categories)
            x1.domain(brandNames).range([0, x0.bandwidth()])
            y.domain([0, 100])

            svg.append('g')
                .attr('class', 'x axis')
                .attr('opacity', '0.7')
                .call(xAxis)
                .attr('transform', `translate(0, ${measurements.height})`)

            svg.append('g')
                .attr('class', 'y axis')
                .attr('opacity', '0.7')
                .call(yAxis)


            const slice = svg.selectAll('.slice')
                .data(dataSet)
                .enter().append('g')
                .attr('class', 'g')
                .attr('transform', d => `translate(${x0(d.key)}, 0)`)

            slice.selectAll('rect')
                .data(d => d.values)
                .enter().append('rect')
                .attr('width', x1.bandwidth())
                .attr('x', d => x1(d.brand)!)
                .attr('y', d =>y(d.keyValue))
                .attr('height', d => measurements.height - y(d.keyValue))
                .attr('fill', d => colors(d.brand) as string)
        }
    }, [selection])
    return <div ref={ref}></div>
}
