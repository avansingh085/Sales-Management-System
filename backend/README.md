# Sales Management System (Backend)

## 1. Overview
This project serves as the backend API for the Sales Management System. It is built using Node.js and Express.js, connecting to a MongoDB database via Mongoose. The backend is optimized to handle complex data retrieval operations including efficient pagination, multi-field filtering, substring searching, and data aggregation for statistical summaries.

## 2. Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose ODM)
* **Middleware:** CORS (Cross-Origin Resource Sharing)
* **Configuration:** Dotenv
* **Language:** JavaScript

## 3. Implementation Details

###  Advanced Search Implementation
The system uses MongoDB's regex capabilities to perform flexible substring matching.
* **Logic:** The API constructs a `$or` query using regex options (`$regex`, `$options: 'i'`) to perform case-insensitive searches.
* **Fields:** It searches for matches within the `name` or `phoneNumber` fields simultaneously.

###  Multi-Filter Strategy
To refine results, the backend builds a dynamic query object based on available parameters.
* **Exact Match:** Used for categorical data like `gender` or `category`.
* **Range Match:** Can be applied to numerical fields (like sales quantity) or dates if provided.
* **Efficiency:** The query object is built conditionally; if a filter is missing from the request, it is excluded from the database query.

###  Efficient Pagination
To handle large datasets without performance degradation, the system uses Mongoose's `skip` and `limit` methods.
* **Formula:**
    ```javascript
    const skip = (page - 1) * limit;
    ```
* **Logic:** The API calculates how many documents to skip based on the current page number and the defined limit (items per page), ensuring only the requested chunk of data is fetched from the database.

###  Data Aggregation Summary
For statistical insights (e.g., Total Sales, Average Order Value), the backend uses the **MongoDB Aggregation Pipeline**.
* **Logic:** Uses `Model.aggregate()` with stages like `$match` (to filter data first) and `$group` (to calculate sums and averages). This is much faster than fetching all data to the server and calculating it manually in JavaScript.

---

## 4. API Endpoints

### `GET /api/transaction`
Fetches the main data table with search, sort, filter, and pagination.
* **Query Params:** `search`, `page`, `gender`, `produtcategory`, `sort`,..etc.

## 5. Setup Instructions

Follow these steps to set up and run the backend server.

### Prerequisites
* Node.js (v16 or higher)
* MongoDB (Local or Atlas URL)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/avansingh085/Sales-Management-System.git
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Configuration

1.  Create a file named `.env` in the root directory.
2.  Add the following variables (ensure `FRONTEND_URL` matches your React app's running port):

    ```env
    MONGO_URI='mongodb://localhost:27017/sales_db'
    FRONTEND_URL='http://localhost:5173'
    PORT=5000
    ```

### Running the Application

1.  **Start the server:**
    ```bash
    node index.js
    ```