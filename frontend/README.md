# Sales Management System (Frontend)

## 1. Overview
The **Sales Management System Frontend** is a responsive, high-performance dashboard built with React and Tailwind CSS. It is designed to visualize and manage large datasets of sales candidates efficiently. The application focuses on backend load reduction and optimal user experience by implementing server-side pagination, debounced searching, and multi-criteria filtering to ensure the interface remains fast even with heavy data loads.

## 2. Tech Stack
* **Core:** React.js (Vite)
* **Styling:** Tailwind CSS
* **State Management:** React Hooks
* **HTTP Client:**  Axios
* **Environment:** Dotenv (Vite native support)

## 3. Implementation Details

###  Optimized Search (Debouncing)
To prevent server overload during data fetching, the search bar implements a **Debounce mechanism**.
* **Logic:** When a user types a name to search, the API call is delayed (e.g., 500ms).
* **Benefit:** This drastically reduces unnecessary API calls by ensuring a request is sent only when the user stops typing, rather than on every keystroke.

### ⚡ Multi-Data Filtering
The dashboard allows users to refine data based on multiple attributes simultaneously.
* **Supported Filters:**
    * **Gender:** (e.g., Male, Female, Other)
    * **Category:** (e.g., Electronics, Clothing, Software)
    * ......etc.
* **Logic:** Filters are stored in the state and passed as query parameters to the backend (e.g., `?gender=Male&category=Electronics`), ensuring only matching records are returned without fetching the whole database.

###  Sorting Logic
Users can organize the data table based on different priorities.
* **Alphabetical:** Sort by Candidate Name (A-Z).
* **Newest First:** Sort by creation date (Newest entries at the top).
* **Quantity Based:** Sort by Sales Quantity (High to Low or Low to High).

###  Server-Side Pagination
To handle "sudden load" and huge datasets without freezing the browser, the app uses server-side pagination.
* **Logic:** Instead of loading all records at once, the frontend requests data in chunks (e.g., 12 items per page).
* **Benefit:** Reduces initial load time and memory usage, displaying only the necessary data for the current view.

---

## 4. Setup Instructions

Follow these steps to set up and run the project locally.

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/avansingh085/Sales-Management-System.git](https://github.com/avansingh085/Sales-Management-System.git)
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Configuration

1.  Create a file named `.env` in the root directory of the project.
2.  Add the backend URL configuration as shown below:

    ```env
    VITE_BACKEND_URL=http://localhost:5000/api
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Access the App:**
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create an optimized build for deployment:
```bash
npm run build
