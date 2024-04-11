<script>
    import { createRender, createTable, Render, Subscribe } from "svelte-headless-table";
    import { readable } from "svelte/store";

    const data = readable([
        { category: 'Employment', current: 3500.00, budget: 3500.00 },
        { category: 'Side Hustle', current: 560.00, budget: 1000.00 },
        { category: 'Investments', current: 180.00, budget: 300.00},
        { category: 'Other', current: 12.40, budget: 150.00}
    ]);

    const data2 = readable([
        { id: "11111", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 3500.00, notes: "Gifts", verified: true },
        { id: "11112", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 560.00, notes: "", verified: true },
        { id: "11113", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 180.00, notes: "", verified: true },
        { id: "11114", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 12.40, notes: "", verified: true }
        ])

    const table = createTable(data2);

    const columns = table.createColumns([
        table.column({
            accessor: 'date',
            header: 'Date'
        }),
        table.column({
            accessor: 'account',
            header: 'Account',
        }),
        table.column({
            accessor: 'category',
            header: 'Category'
        }),
        table.column({
            accessor: 'payee',
            header: 'Payee'
        }),
        table.column({
            accessor: 'amount',
            header: 'Amount',
            cell: ({ value }) => {
                return `$ ${value.toFixed(2)}`;
            },
        }),
        table.column({
            accessor: 'notes',
            header: 'Notes'
        }),
        table.column({
            accessor: 'verified',
            header: 'Verified'
        })
    ])

    const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
        table.createViewModel(columns);

    function className(label) {
        const classMap = {
            "Date": "date-header",
            "Account": "account-header",
            "Category": "category-header",
            "Payee": "payee-header",
            "Amount": "amount-header",
            "Notes": "notes-header",
            "Verified": "verified-header"
        };
        return classMap[label] || undefined;
    }   


</script>

<section class="section">
    <table {...$tableAttrs}>
        <thead>
            {#each $headerRows as headerRow (headerRow.id)}
                <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
                    <tr class="overview-header" {...rowAttrs}>
                    {#each headerRow.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs>
                        <th class="{className(cell.label)}" {...attrs}>
                            <Render of={cell.render()} />
                        </th>
                        </Subscribe>
                    {/each}
                    </tr>
                </Subscribe>
            {/each}
        </thead>
        <tbody>
            {#each $pageRows as row (row.id)}
                <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                <tr class="category-overview" {...rowAttrs}>
                    {#each row.cells as cell (cell.id)}
                    <Subscribe attrs={cell.attrs()} let:attrs>
                        <td {...attrs}>
                        <Render of={cell.render()} />
                        </td>
                    </Subscribe>
                    {/each}
                </tr>
                </Subscribe>
            {/each}
        </tbody>
    </table>
</section>

<style>
    .section {
        display: block;
        width: 100%;
        overflow: auto;
    }
    table {
        width: 99%;
        border-collapse: separate;
        border-spacing: 0px 3.9px; /* Adjust this value to change the spacing */
        height: 100%;
        overflow: auto;
    }
    .overview-header,
    .category-overview {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        background-color: #152032;
        color: #f5f7fa;
        border-radius: 11.42px;
        background-clip: padding-box;
        box-shadow: 1.9px 3.81px 0px #f5f7fa;
    }
    th,
    td {
        height: 35px;
        border-top: 2px solid;
        border-bottom: 2px solid;
    }
    td:first-child {
        border-left: 2px solid;
        border-radius: 11.42px 0 0 11.42px;
    }
    td:last-child {
        border-right: 2px solid;
        border-radius: 0 11.42px 11.42px 0;
    }
    th:first-child {
        border-left: 2px solid;
        border-radius: 11.42px 0 0 11.42px;
    }
    th:last-child {
        border-right: 2px solid;
        border-radius: 0 11.42px 11.42px 0;
    }
    .overview-header {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
    }
    .verified-header {
        max-width: 90px;
    }
    .date-header {
        width: 85px;
    }
    .category-overview {
        font-weight: 500;
        font-size: 10px;
    }
</style>