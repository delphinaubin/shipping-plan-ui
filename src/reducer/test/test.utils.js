export function anInitialState() {
    return {
        mode: {
            creation: false
        },
        columns: [
            {
                name: 'col 1',
                cells: [
                    {
                        index: 0,
                        columnIndex: 0,
                        selected: false,
                        client: undefined
                    },
                    {
                        index: 1,
                        columnIndex: 0,
                        selected: false,
                        client: undefined
                    },
                    {
                        index: 2,
                        columnIndex: 0,
                        selected: false,
                        client: undefined
                    },
                    {
                        index: 3,
                        columnIndex: 0,
                        selected: false,
                        client: undefined
                    }
                ]
            },
            {
                name: 'col 2',
                cells: [
                    {
                        index: 0,
                        columnIndex: 1,
                        selected: false,
                        client: undefined
                    },
                    {
                        index: 1,
                        columnIndex: 1,
                        selected: false,
                        client: undefined
                    },
                    {
                        index: 2,
                        columnIndex: 1,
                        selected: false,
                        client: undefined
                    },
                    {
                        index: 3,
                        columnIndex: 1,
                        selected: false,
                        client: undefined
                    }
                ]
            }
        ]
    };
}
