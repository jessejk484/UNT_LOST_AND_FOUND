document.addEventListener('DOMContentLoaded', function () {
    const totalComplaintsElement = document.getElementById('totalComplaints');
    const itemsFoundElement = document.getElementById('itemsFound');
    const itemsNotFoundElement = document.getElementById('itemsNotFound');
    const itemsInprogressElement = document.getElementById('itemsInprogress');
    const itemsClaimedElement = document.getElementById('itemsClaimed');

    const complaintRows = document.querySelectorAll('tbody tr');
    const totalRows = complaintRows.length;
    const resolvedRows = document.querySelectorAll('tbody .resolved').length;
    const unresolvedRows = document.querySelectorAll('tbody .unresolved').length;
    const inprogressRows = document.querySelectorAll('tbody .inprogress').length;
    const claimedRows = document.querySelectorAll('tbody .claimed').length;

    totalComplaintsElement.textContent = totalRows;
    itemsFoundElement.textContent = resolvedRows;
    itemsNotFoundElement.textContent = unresolvedRows;
    itemsInprogressElement.textContent = inprogressRows;
    itemsClaimedElement.textContent = claimedRows;

    // Function to update chart
    function updateChart(resolved, unresolved, inprogress, claimed) {
        const ctx = document.getElementById('statisticsChart').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Found', 'NotFound', 'In Progress', 'Claimed'],
                datasets: [{
                    data: [resolved, unresolved, inprogress, claimed],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.7)', // Green for Found
                        'rgba(255, 0, 0, 0.7)', // Red for Lost
                        'rgba(255, 165, 0, 0.7)', // Orange for In Progress
                        'rgba(128, 0, 128, 0.7)', // Purple for Claimed
                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 165, 0, 0.7)',
                        'rgba(128, 0, 128, 0.7)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false
            }
        });
    }

    updateChart(resolvedRows, unresolvedRows, inprogressRows, claimedRows);

    // Example code for creating a monthly bar chart
    const ctxMonthlyChart = document.getElementById('monthlyChart').getContext('2d');
    const monthlyChart = new Chart(ctxMonthlyChart, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Found',
                    backgroundColor: 'rgba(0, 255, 0, 0.7)',
                    data: [10, 8, 15, 12, 7, 20, 18, 22, 15, 10, 12, 14],
                },
                {
                    label: 'Not Found',
                    backgroundColor: 'rgba(255, 0, 0, 0.7)',
                    data: [5, 7, 10, 8, 12, 6, 10, 15, 8, 5, 9, 11],
                },
            ],
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                },
            },
        },
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize click rate (percentage)
    let clickRatePercentageData = 60;

    // Static data (replace with your actual data)
    const totalUsersData = 500;
    const sessionsPercentageData = 75;
    const pageViewsData = 90;

    // Update total users
    document.getElementById('totalUsers').textContent = totalUsersData;

    // Update sessions (percentage)
    document.getElementById('sessions').textContent = `${sessionsPercentageData}%`;

    // Update average click rate (percentage)
    document.getElementById('averageClickRate').textContent = `${clickRatePercentageData}%`;

    // Update page views
    document.getElementById('pageViews').textContent = pageViewsData;

    // Chart configurations for line graphs
    createLineChart('totalUsersChart', 'Total Users', [/* Data array for line chart */]);
    createLineChart('sessionsChart', 'Sessions (%)', [/* Data array for line chart */]);
    createLineChart('clickRateChart', 'Average Click Rate (%)', [clickRatePercentageData]);
    createLineChart('pageViewsChart', 'Page Views', [/* Data array for line chart */]);

    // Increase click rate on each click
    document.body.addEventListener('click', function () {
        clickRatePercentageData += 1;
        document.getElementById('averageClickRate').textContent = `${clickRatePercentageData}%`;

        // Update click rate chart
        updateLineChart('clickRateChart', clickRatePercentageData);
    });
});

function createLineChart(canvasId, label, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: label,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }],
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
        },
    });
}

function updateLineChart(canvasId, newData) {
    const chart = Chart.getChart(canvasId);
    chart.data.datasets[0].data.push(newData);
    chart.update();
}

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
function signOut() {
    setTimeout(function () {
        window.location.href = "/Users/puppa/All_Git_Files/unt_lost_and_found/src/loginPage/login.html";
    }, 1000);
}