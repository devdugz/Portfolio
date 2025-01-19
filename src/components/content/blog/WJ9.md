This Christmas week focused on a collaborative **Furniture App** project, showcasing skills in **Vue.js**, **Python Flask**, and **Tailwind CSS** for frontend and backend development. Here's a detailed breakdown:

### **Team Project: Furniture App**

#### **Frontend Development (Vue.js)**

1. **Initial Setup:**  
   * Installed and configured `vue-router` for dynamic routing.  
   * Added **axios** for handling HTTP requests to the backend API.  
   * Installed and configured **Tailwind CSS** for responsive and aesthetic styling.  
2. **Core Components:**  
   * Built essential components:  
     * **Header**: Navigation menu with routing links.  
     * **Footer**: Consistent branding and contact details.  
     * **Products Page**: Displayed furniture items with titles, descriptions, images, and prices.  
   * Implemented **CRUD Actions**:  
     * **Show**: Displayed detailed product information in a modal.  
     * **Edit/Update**: Enabled editing product details with form validation.  
     * **Destroy**: Added functionality to delete products.  
3. **Authentication:**  
   * Created **Signup, Login, and Logout** pages:  
     * Stored authentication state using tokens or cookies.  
     * Redirected users post-login to the home or products page.  
4. **Styling:**  
   * Styled all components using **Tailwind CSS**.  
   * Ensured mobile responsiveness and consistency in layout.

#### **Backend Development (Flask)**

1. **Setup:**  
   * Installed necessary Flask extensions:  
     * **Flask-SQLAlchemy**: ORM for database interaction.  
     * **Flask-Bcrypt**: Password hashing for secure user authentication.  
     * **Flask-CORS**: Enabled cross-origin requests for frontend-backend communication.  
   * Initialized a SQLite database for storing app data.  
2. **Database Models:**  
   * Created tables with attributes:  
     * **Users**: Name, email, hashed password, admin status, timestamps.  
     * **Products**: Name, image URL, description, price, category, tax, and total.  
     * **Orders**: User ID, subtotal, tax, total, timestamps.  
     * **CartedProducts**: User ID, product ID, quantity, status, order ID, timestamps.  
   * Seeded the database with sample data (users, categories, products, orders).  
3. **API Development:**  
   * Built a CRUD API:  
     * **GET**: Fetch all products, product details.  
     * **POST**: Add new products.  
     * **PATCH**: Update existing products.  
     * **DELETE**: Soft delete products.  
   * Implemented authentication:  
     * User signup, login, and token management using Flask-Bcrypt.  
4. **Integration:**  
   * Configured the backend to serve requests from `localhost:5000`.  
   * Modified axios requests in the frontend to ensure proper data formatting and API communication.

### **New Technologies and Skills**

1. **Python Flask**  
   * Built a CRUD API from scratch.  
   * Followed the [Flask tutorial](https://flask.palletsprojects.com/en/3.0.x/tutorial/) for foundational knowledge.  
2. **Vue.js**  
   * Advanced knowledge of Vue components, state management, and Vue Router.  
   * Integrated Tailwind CSS into Vue for seamless styling.  
3. **Full-Stack Collaboration**  
   * Used GitHub for team collaboration:  
     * Created pull requests for features.  
     * Reviewed and merged code effectively.  
   * Practiced database seeding and migrations collaboratively.

### **Additional Exercises**

1. **Python Flask Standalone Project:**  
   * Created a standalone Flask CRUD API for photo management:  
     * **GET /photos**: Returns a list of photos.  
     * **POST /photos**: Adds a new photo.  
   * Documented a custom cheat sheet for Flask API CRUD.  
2. **Experimentation with Flask and Vue:**  
   * Deployed a Flask API and tested integrations with Vue.js.  
3. **Deployment and Portfolio Preparation:**  
   * Prepared the project repository for portfolio inclusion:  
     * Updated README with project description and individual contributions.

### **Takeaways from Week 9**

* **Full-Stack Project Execution**: Delivered a polished Furniture App using modern frameworks.  
* **Collaborative Coding**: Strengthened teamwork skills through GitHub workflows.  
* **Cross-Skill Development**: Improved proficiency in Flask and Vue.js while integrating Tailwind CSS.  
* **Portfolio-Ready Project**: Positioned the Furniture App as a strong addition to the professional portfolio.

This week was an excellent culmination of learned skills and collaborative development, setting the stage for future real-world projects. 🚀

