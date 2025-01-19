Despite the Thanksgiving holiday, I made significant strides in backend authentication, frontend styling with Tailwind CSS, and understanding React integration. Here's an overview of my work this week:

### **1\. Implementing Authentication in Rails**

I added authentication features to my **mini-capstone** app following a structured guide.

* **Sign-Up (Part 1):**  
  * Implemented a `users#create` action for user registration.  
  * Used HTTPie to create valid and invalid users to test password confirmation and unique email validation.  
* **Login (Part 2):**  
  * Created a `sessions#create` action for logging in users.  
  * Learned about session cookies and tested login functionality via HTTPie.  
* **Logout and Current User (Parts 3 & 4):**  
  * Added `sessions#destroy` for logout.  
  * Implemented a `current_user` helper method to identify the logged-in user.  
  * Verified the current user by sending cookies with requests.  
* **Example Pets API:**  
   Built a mini API with authentication to practice:  
  Associating users with pets (`has_many` / `belongs_to` relationships).  
  * Restricting pet creation, updates, and deletion to the logged-in user.

### **2\. Orders Feature for Mini-Capstone**

Expanded the mini-capstone functionality to support user orders:

1. **Model and Associations:**  
   * Generated an `Order` model with attributes: `user_id`, `product_id`, `quantity`, `subtotal`, `tax`, and `total`.  
   * Established relationships between `Order`, `User`, and `Product`.  
2. **Controller Actions:**  
   **Index:** Show all orders for the current user.  
   * **Show:** Display a specific order.  
   * **Create:** Let users submit orders, dynamically calculating subtotal, tax, and total.  
3. **Authorization:**  
   * Restricted access to order details based on the current user.  
   * Tested access using cookies in HTTP requests.  
4. **Testing:**  
   * Added automated tests for the `OrdersController` to validate `index`, `create`, and `show` actions.

### **3\. Admin Authorization**

* Added an `admin` column to the `users` table (default: `false`).  
* Implemented `authenticate_admin` to restrict product creation, updates, and deletion to admin users.  
* Updated controller tests to handle the new authentication logic.

### **4\. React Authentication**

* Followed a React guide to implement user authentication in the frontend:  
  * Built `Signup`, `Login`, and `LogoutLink` components.  
  * Tested cookie-based authentication by inspecting cookies in the browser.  
* Learned to handle sessions and cookies in React for seamless user login/logout functionality.

### **5\. Exploring Tailwind CSS**

* **Setup:**  
  * Installed Tailwind CSS in a React app and configured it with Vite.  
  * Added the Tailwind CSS IntelliSense extension in VSCode for productivity.  
* **Styling:**  
  * Styled components (`Header`, `Footer`, `App`) using utility classes for:  
    * Background colors, padding, borders, hover effects.  
    * Grid layouts for responsive design.  
    * Cards with box shadows and aspect ratios for consistency.

### **6\. Frontend Development with React**

1. **Blog Frontend:**  
   * Connected React components (`PostsNew`, `PostsIndex`, `Header`, `Footer`) to a Rails API backend.  
   * Used modals to dynamically display post details.  
   * Implemented full CRUD operations with state updates to reflect changes instantly.  
2. **Mini-Capstone Frontend:**  
   * Set up a new React frontend for the mini-capstone app.  
   * Styled components with Tailwind CSS and practiced building reusable layouts.  
3. **Practice React App:**  
   * Created a React app styled with Tailwind CSS for hands-on CRUD practice.  
   * Added grid layouts, cards, and interactive features for a polished look.

### **7\. Whiteboarding and Problem-Solving**

Practiced algorithmic thinking through group exercises:

* Reversed strings and arrays.  
* Found sums, products, and smallest elements in arrays.  
* Solved problems step-by-step without using built-in methods like `.sort` or `.reverse`.

**Bonus Challenges:**

* Determined array insertion points for sorted arrays.  
* Checked for palindromes and generated prime numbers.

### **Key Takeaways**

* **Authentication Mastery:** Gained confidence in implementing user authentication and role-based access control in Rails.  
* **Frontend-Backend Integration:** Connected React frontends with Rails APIs for seamless data flow.  
* **Styling with Tailwind CSS:** Learned to style modern React applications quickly and effectively.  
* **Problem-Solving Skills:** Enhanced algorithmic thinking through whiteboarding and decomposition exercises.

### **Reflection**

Week 5 solidified my understanding of authentication, frontend-backend communication, and modern styling techniques. Despite the holiday break, I made significant progress in both coding and conceptual knowledge.

Looking forward to continuing the momentum in Week 6\! 🎉

