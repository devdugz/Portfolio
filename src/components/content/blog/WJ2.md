The second week of my Actualize coding BootCamp introduced me to Ruby on Rails, a powerful framework for building web applications. I explored creating Rails apps, building APIs, and implementing RESTful routes. Here's an overview of what I worked on:

### **1\. Getting Started with Rails**

**Rails Basics:**  
Created my first Rails app using the command:  
bash  
Copy code  
`rails new sample-app --database=postgresql`  
`cd sample-app`  
`rails db:create`  
`rails server`

* This resulted in a simple web application accessible at `http://localhost:3000/`.  
* **Controller Generation:**  
  Added a controller (`example_pages`) and experimented with routes and JSON rendering in `routes.rb` and `example_pages_controller.rb`.  
  * Implemented three different routes to return JSON messages.  
  * Enhanced complexity by rendering arrays and hashes.

### **2\. Developing Features with Fortune-App**

I built a new app, **Fortune-App**, with several interactive features:

1. **Random Fortune Generator:**  
   A route that displayed a random fortune each time the page was refreshed.  
2. **Lottery Numbers:**  
   Generated six random numbers between 1 and 60 to simulate lottery predictions.  
3. **Page Visit Counter:**  
   Explored using sessions to track the number of times a page was visited.  
   *(This exercise highlighted the limitations of HTTP in maintaining persistent server-side counts.)*  
4. **Bonus Features:**  
   * Implemented a "99 Bottles of Beer on the Wall" lyrics generator.  
   * Built a Ruby script using the `http` gem to fetch results in the terminal.

### **3\. Building a Personal Contacts API**

Created **Contacts-API**, a Rails application for managing contacts.

* **Database and Models:**  
  * Generated a `Contact` model with attributes: `first_name`, `last_name`, `email`, and `phone_number`.  
  * Used `rails db:migrate` to update the database schema.  
* **CRUD Operations:**  
  * Practiced creating, reading, updating, and deleting contacts via the Rails console.  
  * Built API endpoints to return JSON for individual and multiple contacts.  
* **Jbuilder:**  
  Used `jbuilder` to structure JSON responses, allowing dynamic and detailed output.  
* **Seeding the Database:**  
  Populated the database using the `db/seeds.rb` file for testing and demonstration purposes.

### **4\. Mini-Capstone: Building an E-Commerce API**

Started my **mini-capstone-api**, an e-commerce backend project.

* **Product Model:**  
  Created a `Product` model with attributes: `name`, `price`, `image_url`, and `description`.  
* **Routes and Actions:**  
  * Implemented RESTful actions (`index`, `show`, `create`, `update`, and `destroy`).  
  * Built JSON endpoints for individual and all products.  
* **Custom Model Methods:**  
  * `is_discounted?`: Checks if the product price is $10 or less.  
  * `tax`: Calculates a 9% tax on the product price.  
  * `total`: Adds the product price and tax.  
* **Testing and Validation:**  
  * Added automated tests for all actions and model methods using Rails’ testing suite.  
  * Verified functionality through tests and manual HTTP requests.

### **5\. Advanced Rails Concepts**

* **CORS Configuration:**  
  Configured `rack-cors` to enable cross-origin requests, allowing my API to work with a frontend.  
* **Frontend Testing:**  
  Used a pre-built frontend to interact with my API endpoints.  
* **Dynamic Features:**  
  Built a Ruby script using the `http` gem to interact with the API, adding features like formatted output using the `tty-table` gem.

### **6\. Key Challenges and Discoveries**

* **Persistence with Sessions:**  
  Learned that session data can track users temporarily but doesn’t persist across server restarts.  
* **API Design:**  
  Realized the importance of structuring JSON responses for clarity and scalability.  
* **Testing:**  
  Writing automated tests helped ensure the reliability of my application, especially during iterative development.  
* **Learning by Doing:**  
  Following exercises without looking at notes encouraged critical thinking and problem-solving.

### **Reflection**

Week 2 was a leap forward in understanding web development with Rails. From building basic apps to implementing APIs and learning to test and debug my code, the week laid the groundwork for more complex projects. I’m excited to refine these skills further as I continue working on my mini-capstone and personal projects.

Stay tuned for more updates as I progress\! 🚀

