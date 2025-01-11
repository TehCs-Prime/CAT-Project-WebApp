<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./CSS/AdminPanel.css">
    <title>Admin Dashboard</title>
</head>
<body>
<div class="admin-container">
    <!-- Sidebar Navigation -->
    <nav class="sidebar">
        <div class="logo">
            <h2>Admin Panel</h2>
        </div>
        <ul class="nav-links">
            <li class="active" data-tab="dashboard">
                <i class="home"></i>
                <span>Dashboard</span>
            </li>
            <li data-tab="orders">
                <i class="shopping-cart"></i>
                <span>Orders</span>
            </li>
            <li data-tab="products">
                <i class="items"></i>
                <span>Products</span>
            </li>
            <li data-tab="customers">
                <i class="users"></i>
                <span>Customers</span>
            </li>
        </ul>
    </nav>

    <!-- Main Content Area -->
    <main class="main-content">
        <!-- Top Header -->
        <header class="top-header">
            <div class="admin-profile">
                <img src="./Sources/AdminPic.jpeg" alt="Admin">
                <span>Admin User</span>
            </div>
            <div class="logout">
                <button class="logoutButton">Logout</button>
            </div>
        </header>

        <!-- Dashboard Content -->
        <div class="content-section active" id="dashboard">
            <div class="stats-cards">

                <div class="stat-card">
                    <div class="stat-value">
                        <h3>Total Orders</h3>
                        <p>1,254</p>
                    </div>
                    <div class="stat-icon orders">
                        <i class="shopping-bag"></i>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-value">
                        <h3>Revenue</h3>
                        <p>RM 25,642</p>
                    </div>
                    <div class="stat-icon revenue">
                        <i class="dollar-sign"></i>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-value">
                        <h3>Pending Orders</h3>
                        <p>99</p>
                    </div>
                    <div class="stat-icon pending">
                        <i class="pending-orders"></i>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-value">
                        <h3>Customers</h3>
                        <p>892</p>
                    </div>
                    <div class="stat-icon customers">
                        <i class="users"></i>
                    </div>
                </div>

            </div>

            <div class="recent-orders">
                <div class="section-header">
                    <h2>Recent Orders Only</h2>
                    <div class="header-actions">
                        <button class="filter-btn">
                            <i class="filter"></i> Filter
                        </button>
                        <button class="reset-btn">
                            <i class="reset"></i> Reset
                        </button>
                    </div>
                </div>
                <table class="orders-table">
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Products</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Issued Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody id="ordersTableBody">
                    <!-- Orders will be populated by JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Orders Section -->
        <div class="content-section" id="orders">
            <!-- Orders content here -->
            <div class="total-orders">
                <div class="section-header">
                    <h2>Total Orders</h2>
                    <div class="header-actions">
                        <button class="filter-btn-orders">
                            <i class="filter"></i> Filter
                        </button>
                        <button class="reset-btn-orders">
                            <i class="reset"></i> Reset
                        </button>
                    </div>
                </div>
                <div class="orders-table-wrapper">
                    <table class="orders-table">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Products</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Issued Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody id="totalOrdersTableBody">
                        <!-- Orders will be populated by JavaScript -->
                        </tbody>
                    </table>
                    <div class="pagination">
                        <button class="pagination-btn" id="prevPage">Previous</button>
                        <span id="pageInfo">Page 1 of 1</span>
                        <button class="pagination-btn" id="nextPage">Next</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Products Section -->
        <div class="content-section" id="products">
            <div class="products-section">
                <div class="section-header">
                    <h2>Products</h2>
                    <div class="header-actions">
                        <button class="add-product-btn">Add Product</button>
                        <button class="filter-btn-products">Filter</button>
                        <button class="reset-btn-products">Reset</button>
                    </div>
                </div>
                <table class="products-table">
                    <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody id="productsTableBody"></tbody>
                    <!-- Products content here -->
                </table>
            </div>
        </div>



        <!-- Customers Section -->
        <div class="content-section" id="customers">
            <div class="customers-section">
                <div class="section-header">
                    <h2>Customers</h2>
                    <div class="header-actions">
                        <button class="filter-btn-customers">
                            <i class="filter"></i> Filter
                        </button>
                        <button class="reset-btn-customers">
                            <i class="reset"></i> Reset
                        </button>
                    </div>
                </div>
                <div class="customers-table-wrapper">
                    <table class="customers-table">
                        <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Total Orders</th>
                            <th>Total Spent</th>
                            <th>Last Order</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody id="customersTableBody">
                        <!-- Customers will be populated by JavaScript -->
                        </tbody>
                    </table>
                    <div class="pagination">
                        <button class="pagination-btn" id="prevPageCustomers">Previous</button>
                        <span id="pageInfoCustomers">Page 1 of 1</span>
                        <button class="pagination-btn" id="nextPageCustomers">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<!-- Modals -->
<div class="modal" id="orderModal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Order Details</h2>
        <div class="order-details">
            <!-- Order details will be populated by JavaScript -->
        </div>
    </div>
</div>

<script src="./js/AdminPanel.js"></script>
</body>
</html>