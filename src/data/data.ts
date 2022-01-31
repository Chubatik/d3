export interface Data {
    key: 'Differentiation' | 'Relevance' | 'Esteem' | 'Knowledge'
    values: Value[]
}

export interface Value {
    keyValue: number
    brand: string
}
export const margin = {top: 20, right: 20, bottom: 40, left: 60}
export const measurements = {
    width: 460 - margin.left - margin.right,
    height: 400 - margin.top - margin.bottom,
}
export const simpleDataSet: Value[] = [
    {
        keyValue: 25,
        brand: 'Fanta'
    },
    {
        keyValue: 50,
        brand: 'Coca-Cola'
    },
    {
        keyValue: 75,
        brand: 'Sprite'
    },
    {
        keyValue: 100,
        brand: 'KFC'
    }
]
export const dataSet: Data[] = [
    {
        key: "Differentiation",
        values: [
            {
                keyValue: 10,
                brand: 'Fanta'
            },
            {
                keyValue: 20,
                brand: 'Coca-Cola'
            },
            {
                keyValue: 50,
                brand: 'Sprite'
            }
        ]
    },
    {
        key: "Relevance",
        values: [
            {
                keyValue: 14,
                brand: 'Fanta'
            },
            {
                keyValue: 87,
                brand: 'Coca-Cola'
            },
            {
                keyValue: 67,
                brand: 'Sprite'
            }
        ]
    },
    {
        key: "Esteem",
        values: [
            {
                keyValue: 90,
                brand: 'Fanta'
            },
            {
                keyValue: 47,
                brand: 'Coca-Cola'
            },
            {
                keyValue: 81,
                brand: 'Sprite'
            }
        ]
    },
    {
        key: "Knowledge",
        values: [
            {
                keyValue: 12,
                brand: 'Fanta'
            },
            {
                keyValue: 78,
                brand: 'Coca-Cola'
            },
            {
                keyValue: 66,
                brand: 'Sprite'
            }
        ]
    },
]
