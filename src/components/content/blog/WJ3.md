This week was all about diving deeper into Rails, enhancing database skills, implementing validations, and venturing into JavaScript and modern development tools. Here's a summary of my progress:

### **1\. Mastering Rails Migrations and Database Management**

* **Example Migration App:**  
  I created a new Rails app to practice migrations (`example-migration-app`) and explored modifying database tables after they’ve already been created and migrated.  
  **Tasks Included:**  
  * Adding, removing, and renaming columns.  
  * Changing column data types.  
* This exercise strengthened my understanding of migrations and how Rails manages database schema changes.  
* **Mini-Capstone Updates:**  
  * Fixed the data type for the `description` and `price` attributes in the `products` table.  
  * Added an `inventory` attribute to track stock levels for each product.  
  * Used tools like Postico to visualize database changes and ensure data consistency.

### **2\. Implementing Validations and Error Handling**

* **Model Validations:**  
  Added validations to ensure data integrity:  
  * **Product model:**  
    * `name`: Must be present and unique.  
    * `price`: Must be a positive number.  
    * `description`: Length must be between 1 and 5000 characters.  
    * `image_url`: Checked for valid file formats (e.g., `.jpg`, `.png`).  
  * **User model (example-validations-app):**  
    * `first_name`, `last_name`, and `email`: Must be present.  
    * `email`: Must be unique.  
* **Testing Validations:**  
  Used the Rails console to create invalid data, validate it (`product.valid?`), and examine error messages (`product.errors.full_messages`).  
* **Error Handling in Controllers:**  
  * Added happy/sad path conditions for `create` and `update` actions.  
  * Tested sad paths with HTTPie and automated tests to ensure proper error responses.

### **3\. Building Relationships with Associations**

* **Supplier and Product Relationship:**  
  * Added a `Supplier` model with attributes: `name`, `email`, and `phone_number`.  
  * Linked products to suppliers using a `supplier_id` attribute in the `products` table.  
  * Updated the `Product` model to include a `supplier` method and modified JSON responses to display supplier information alongside product data.  
* **One-to-Many Relationship for Images:**  
  * Removed the `image_url` attribute from the `Product` model and created an `Image` model with a `url` attribute.  
  * Updated JSON responses to display multiple images for each product.  
  * Fixed broken `create` and `update` actions to handle image associations.

### **4\. JavaScript and Modern Development Tools**

* **Intro to JavaScript:**  
  * Set up a `practice-javascript` folder and used basic JavaScript syntax to explore variables, DOM manipulation, and event handling.  
  * Worked on a `js-lotr` exercise to manipulate arrays and interact with the DOM using JavaScript functions.  
* **Modern JavaScript Tools:**  
  * Learned to set up `npm` projects, install libraries, and use tools like Webpack and Babel.  
  * Experimented with libraries like `moment.js` for date manipulation and `math.js` for advanced calculations.  
  * Explored live-server for automatic browser refresh during development.

### **5\. Building APIs with Node.js and Express**

* **Basic Express App:**  
  * Followed a tutorial to create an Express.js backend with multiple routes.  
  * Experimented with CRUD operations using SQLite for a simpler database setup.  
  * Tested API routes using HTTPie for a smooth debugging process.

### **6\. Personal Project and Documentation**

* Focused on my personal project, enhancing my GitHub repo with detailed feature descriptions and tracking progress using GitHub issues.  
* Started experimenting with daily "TIL" (Today I Learned) logs to document key takeaways.

### **Key Takeaways**

* **Rails Mastery:** Improved my ability to manage databases and create complex model relationships.  
* **Validation and Error Handling:** Learned the importance of ensuring data integrity and providing clear error messages.  
* **JavaScript Basics:** Took my first steps into modern JavaScript tools and workflows.  
* **Express and Node.js:** Expanded my backend development skills by building APIs outside Rails.

Week 3 was packed with opportunities to refine my skills and explore new technologies. I’m eager to keep building on these foundations as I work toward completing my mini-capstone project and other challenges.

Stay tuned for Week 4 updates\! 🎉

