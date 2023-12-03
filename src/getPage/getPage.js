function goToBottlePage() {
    window.location.href = "/Users/puppa/All_Git_Files/unt_lost_and_found/src/bottlePage/bottle.html";
}
function goToLaptopPage() {
    window.location.href = "/Users/puppa/All_Git_Files/unt_lost_and_found/src/laptopPage/laptop.html";
}
function signOut() {
    setTimeout(function () {
        window.location.href = "/Users/puppa/All_Git_Files/unt_lost_and_found/src/loginPage/login.html";
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {

    const data = [
        {
            "status": "Found",
            "id": '123',
            "item": "Bottle",
            "place": "Hyderabad",
            "date": "23-03-2023",
            "description": "Found the bottle"
        },
        {
            "status": "Not Found",
            "id": '12345',
            "item": "Laptop",
            "place": "Hyderabad",
            "date": "23-03-2023",
            "description": "Lost the Laptop"
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
                            <td>${item.status}</td>
                            <td>${item.id}</td>
                            <td>${item.item}</td>
                            <td>${item.place}</td>
                            <td>${item.date}</td>
                            <td>${item.description}</td>
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

document.addEventListener('DOMContentLoaded', function () {
    //document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.js-login-button');

    const loginModal = document.querySelector('.js-login-modal');

    loginBtn.addEventListener('click', () => {
        console.log("Entered")
        const isOpen = loginModal.classList.contains('is-open');

        if (isOpen) {

            loginModal.classList.remove('is-open');

        }

        else {

            loginModal.classList.add('is-open');

        }

    });
});