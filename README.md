
# Income Expense Tracker

A simple, user-friendly Income and Expense Tracker web application that allows users to track their income and expenses in real-time. This project was built with HTML, CSS, and JavaScript and includes local storage for persistent data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)


## Overview

The Income Expense Tracker is a web-based app that allows users to:
- View their current balance, total income, and total expenses.
- Add and categorize transactions as either income or expense.
- Persist data using local storage to ensure all transactions are available even after refreshing the page.

## Features

- **Real-time Balance Update:** Automatically updates the balance, income, and expense totals when transactions are added or removed.
- **Transaction History:** Displays a list of transactions with categorized income and expense items.
- **Delete Transactions:** Allows users to delete transactions and dynamically updates the totals.
- **Local Storage Persistence:** Saves data locally, so users can return to the app without losing transaction history.

## Technologies Used

- **HTML5:** Structuring the web page layout.
- **CSS3:** Styling the application, with responsive design for various screen sizes.
- **JavaScript:** Logic for adding, deleting, and storing transactions.

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/income-expense-tracker.git
    ```

2. **Navigate to the project folder:**
    ```bash
    cd income-expense-tracker
    ```

3. **Open `index.html` in your browser to run the application locally.**

## Usage

1. **Adding a Transaction:**
   - Enter a description and amount.
   - Click **Add Transaction** to save the transaction.
   - Income amounts should be positive, while expenses should be negative.

2. **Viewing Transactions:**
   - Transactions appear under **Transaction Details**, showing income in green and expenses in red.
   - The balance, income, and expense totals update in real time.

3. **Deleting a Transaction:**
   - Click the **x** button next to any transaction to remove it.
   - Confirm the action, and the transaction will be deleted and totals updated.

## Project Structure

```plaintext
├── index.html           # Main HTML structure
├── style.css            # CSS styling for the layout
├── script.js            # JavaScript for handling transactions and storage
└── README.md            # Project documentation
```



---
