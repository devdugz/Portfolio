This week focused on diving into React, building frontend applications, and integrating them with Rails APIs. I developed skills in component-based design, styling, state management, and API interactions. Here's a summary of my accomplishments:

### **1\. Setting Up a React Frontend**

* Created two React frontends: **blog-frontend** and **practice-mini-capstone-frontend**, using Vite as the project starter.  
* Installed and configured dependencies like `axios` and `bootstrap` for enhanced functionality and styling.  
* Ran development servers and explored live browser updates with `npm run dev`.

### **2\. Component-Based Architecture**

* Divided React apps into modular components: `Header`, `PostsNew`, `PostsIndex`, `Footer`, and `PostsPage`.  
* Moved components into separate files using VSCode’s refactoring tools for better organization.  
* Passed data and functionality between components via props.

**Example:**  
 The `PostsPage` component managed the `posts` state and passed it to `PostsIndex` for dynamic rendering.

### **3\. Dynamic Rendering with React**

* Used the `useState` and `useEffect` hooks to manage and fetch data dynamically:  
  * `useState`: Maintained application state for posts, modals, and form inputs.  
  * `useEffect`: Automated data fetching from APIs on component load.

**Example Workflow:**

1. Fetched posts from `http://localhost:3000/posts.json` using `axios`.  
2. Updated the `posts` state and rendered posts dynamically in `PostsIndex`.

### **4\. CRUD Operations in React**

* Implemented full CRUD functionality for the **blog-frontend** app:  
  * **Index:** Displayed posts dynamically using `axios` to fetch data.  
  * **Create:** Built a form in `PostsNew` that submitted data to the backend with `axios.post`.  
  * **Show:** Used modals to display individual post details dynamically.  
  * **Update & Delete (Practice):** Experimented with edit and delete functionalities as part of exercises.

**Highlights:**

* Styled forms, buttons, and modals using Bootstrap and custom CSS.  
* Cleared forms after submission using `event.target.reset()`.  
* Updated state (`setPosts`) to reflect changes without refreshing the page.

### **5\. Styling with Bootstrap and Custom CSS**

* Imported and utilized Bootstrap for consistent styling across components:  
  * Navbar for the header.  
  * Cards for post previews.  
  * Modals for detailed views.  
  * Grids for responsive layouts.  
* Enhanced styling with custom CSS:  
  * Added background images using Subtle Patterns.  
  * Used Google Fonts for custom typography.  
  * Styled form inputs and buttons for better user experience.

### **6\. Modal Implementation**

* Created a reusable `Modal` component with dynamic visibility:  
  * Used state (`isPostsShowVisible`) to toggle modal visibility.  
  * Passed the selected post data to the modal for dynamic rendering.

**Example Modal Content:**

\<Modal show={isPostsShowVisible} onClose={() \=\> setIsPostsShowVisible(false)}\>  
  \<h2\>{currentPost.title}\</h2\>  
  \<p\>{currentPost.body}\</p\>  
  \<img src={currentPost.image} alt="Post" /\>  
\</Modal\>

### **7\. Backend Integration**

* Connected the React frontend to the Rails API backend (`blog-api` and `mini-capstone-api`):  
  * Configured CORS settings in `config/initializers/cors.rb` to allow requests from `localhost:5173`.  
  * Tested API endpoints (`/posts.json` and `/products.json`) for seamless integration.  
  * Implemented model methods (`primary_image_url`) for optimized data handling.

**Example:**  
 Displayed primary product images on the frontend using the method:

\<img src={product.primary\_image\_url} alt="" /\>

### **8\. Whiteboarding and Problem Solving**

* Practiced whiteboarding exercises to enhance problem-solving skills:  
  * Sum of an array.  
  * Reverse a string or array.  
  * Identify the smallest or largest elements in arrays.  
  * Built solutions step-by-step, avoiding shortcuts like `.sort` or `.reverse`.

### **9\. Bootstrap Design Practice**

* Experimented with Bootstrap components in standalone HTML and CodePen:  
  * Designed layouts with Navbar, Cards, Alerts, and Modals.  
  * Customized grids for responsive designs.

### **Key Takeaways**

* **Frontend Foundations:** Gained hands-on experience with React and modern frontend development tools.  
* **Dynamic Data Handling:** Mastered state management with React hooks (`useState`, `useEffect`).  
* **Styling Expertise:** Combined Bootstrap with custom CSS for professional designs.  
* **Backend Integration:** Established seamless communication between React frontends and Rails APIs.  
* **Problem Solving:** Improved algorithmic thinking through structured whiteboarding exercises.

This week was a massive leap forward in my development journey, combining technical skills with creative design. I’m excited to build on these foundations as I continue to expand my projects\!

Stay tuned for Week 5\! 🎉

