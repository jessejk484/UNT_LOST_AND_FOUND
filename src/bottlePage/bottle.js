document.addEventListener('DOMContentLoaded', function () {

    const data = [
        {
            "id": 'B1',
            "item": "Bottle",
            "place": "Hyderabad",
            "date": "23-03-2023",
            "description": "Lost the bottle",
            "status": "Not Found"
        },
        {
            "id": 'B2',
            "item": "Laptop",
            "place": "Hyderabad",
            "date": "23-03-2023",
            "description": "Found the bottle",
            "status": "Found"
        }
    ]

    let currentFilter = "",
        prevFilter = "",
        orderAsc = true;

    const toggleOrder = () => {
        if (currentFilter === prevFilter) {
            orderAsc = !orderAsc;
        } else {
            orderAsc = true;
        }
    };

    const calcAge = birthDate => {
        let bDate = new Date(birthDate),
            bDateYear = bDate.getUTCFullYear(),
            now = new Date().getFullYear();

        return now - bDateYear;
    };

    const sortTable = (array, sortKey) => {
        return array.sort((a, b) => {
            let x = a[sortKey];
            let y = b[sortKey];

            // If the values are strings, use localeCompare
            if (typeof x === 'string' && typeof y === 'string') {
                return orderAsc ? x.localeCompare(y) : y.localeCompare(x);
            }

            // If the values are not both strings, compare as numbers
            return orderAsc ? x - y : y - x; // Switched x and y here
        });
    };


    const renderTable = tableData => {
        return `${tableData.map(item => {
            // if (item.date.length > 2) {
            //   item.date = calcAge(item.date);
            // }
            return (
                `<tr>
                            <td>${item.id}</td>
                            <td>${item.item}</td>
                            <td>${item.place}</td>
                            <td>${item.date}</td>
                            <td>${item.description}</td>
                            <td>${item.status}</td>
                        </tr>`);

        }).join('')}`;
    };

    const appendTable = (table, destination) => {
        document.querySelector(destination).innerHTML = table;
    };

    const handleSortClick = () => {
        const filters = document.querySelectorAll('#table th');

        Array.prototype.forEach.call(filters, filter => {
            filter.addEventListener("click", () => {
                if (!filter.dataset.filterValue) return false;

                Array.prototype.forEach.call(filters, filter => {
                    filter.classList.remove('active');
                });
                filter.classList.add('active');
                currentFilter = filter.dataset.filterValue;
                toggleOrder();
                init();
            });
        });
    };

    const init = () => {
        let newTableData = sortTable(data, currentFilter),
            tableOutput = renderTable(newTableData);

        appendTable(tableOutput, '#table tbody');

        prevFilter = currentFilter;
    };

    init();
    handleSortClick();
});