This week focused on enhancing my mini-capstone project, building new features, deploying both frontend and backend, and sharpening my problem-solving skills. Here’s a detailed breakdown of my accomplishments:

### **Backend Contributions (Ruby on Rails)**

#### **1\. Categories and Associations**

* Created a `Category` model with a `name` attribute and a `CategoryProduct` join model with `product_id` and `category_id` attributes.  
* **Model Relationships:**  
  * Added `has_many :through` associations between `Category`, `Product`, and `CategoryProduct`.  
  * Implemented a method in the `Category` model to retrieve all associated products.  
* Tested the relationships using the Rails console (e.g., `Category.first.products`, `Product.first.categories`).

#### **2\. Shopping Cart Implementation**

* Designed a schema for a "shopping cart" feature with `users`, `products`, `carted_products`, and `orders` tables.

* **CartedProduct Model:**  
  * Added `user_id`, `product_id`, `quantity`, `status`, and `order_id` attributes.  
  * Associated `CartedProduct` with `User` and `Product`.  
  * Allowed `order_id` to be optional.  
* **CartedProductsController:**  
  * `create` action to add items to the cart, with `status: "carted"` and `current_user.id`.  
  * `index` action to show all carted items for the logged-in user.  
  * `destroy` action to set the `status` of a carted product to `"removed"`.  
* **OrdersController:**  
  * Updated `create` action to process all carted products with `status: "carted"`.  
  * Calculated `subtotal`, `tax`, and `total` dynamically.  
  * Updated carted products to `"purchased"` status and linked them to the new order.

#### **3\. Deployment**

* Deployed the Rails API backend to Render.com following the deployment guide.  
* Ensured the `seeds.rb` file was up-to-date for deployment.

### **Frontend Contributions (React)**

#### **1\. Authentication Enhancements**

* Modified `Header.jsx` to conditionally render `Signup`, `Login`, and `Logout` links based on the user’s authentication status (`localStorage.email`).  
* Displayed the logged-in user’s email in the header.

#### **2\. Search and Autocomplete**

* Implemented a **search filter** in `PostsIndex.jsx`:  
  * Created a `searchFilter` state variable and an input field for user input.  
  * Used `.filter` and `.map` to dynamically display posts based on the search query.  
* Added an **autocomplete feature**:  
  * Created a `<datalist>` element with `id="titles"`.  
  * Mapped post titles into `<option>` elements for the autocomplete dropdown.

#### **3\. Shopping Cart Frontend**

* Integrated frontend with the updated backend for the shopping cart feature.  
* Added React components for:  
  * Viewing carted products (`CartedProductsIndex`).  
  * Adding items to the cart (`AddToCart` button on product pages).  
  * Updating or removing items from the cart.  
* Styled the shopping cart using Tailwind CSS.

#### **4\. Deployment**

* Deployed the React frontend to Render.com and connected it to the backend.  
* Configured CORS in the Rails API to accept requests from the deployed frontend.

### **Styling with Tailwind CSS**

* Styled key components such as the header, footer, product cards, and shopping cart pages.  
* Applied responsive layouts using Tailwind's grid and flex utilities.  
* Customized the design with Tailwind's typography and colors.

### **HackerRank Practice**

* Solved multiple problems in the following domains:  
  * **Algorithms (Warmup):** Practiced foundational programming skills like loops and conditionals.  
  * **Strings:** Worked on problems involving string manipulation, pattern matching, and data parsing.

### **Key Takeaways**

1. **Advanced Rails Relationships:**  
    Mastered the use of `has_many :through` relationships to handle complex associations like categories and products.  
2. **Dynamic Frontend Features:**  
    Implemented robust React features like search, autocomplete, and authentication conditionals.  
3. **Full-Stack Integration:**  
    Successfully connected a deployed Rails API backend with a React frontend on Render.com.  
4. **E-Commerce Design:**  
    Gained practical experience designing and implementing a shopping cart feature, including both frontend and backend components.  
5. **Problem Solving:**  
    Enhanced algorithmic thinking through HackerRank challenges, sharpening my ability to solve problems under constraints.

### **Reflection**

This week provided hands-on experience in designing and implementing complex features, deploying applications, and addressing real-world problems. The focus on full-stack development and e-commerce functionality has prepared me for tackling industry-level challenges. Looking forward to building on this momentum in the weeks ahead\! 🎉  
