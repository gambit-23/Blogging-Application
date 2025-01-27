Blogging App
A simple blogging application built using Node.js and Express.js with EJS for templating. The app allows users to sign up, log in, create and upload blog posts with a file, title, and body, and add comments to blog posts.

Features
User Authentication:
Signup and Login functionality secured with JWT (JSON Web Tokens).
Blog Management:
Users can create, view, edit, and delete blog posts.
Upload blog posts with a file (e.g., image), title, and body content.
Commenting:
Add comments to individual blog posts.
Middleware:
Authentication middleware for protected routes.
Views:
Rendered using EJS for dynamic HTML templates.

Usage
1. Signup & Login
Navigate to /signup to register a new user.
Navigate to /login to authenticate an existing user.
2. Blog Management
Access the dashboard to create, view, and manage blog posts.
Upload a file, title, and body content when creating a blog.
3. Comments
View a blog post's details to add comments.

Technologies Used
Backend: Node.js, Express.js
Templating: EJS
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
File Uploads: Multer
