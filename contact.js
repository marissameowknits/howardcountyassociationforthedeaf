/* General Styles */
body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
.header {
  background-color: #002750;
  color: #fff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Main Content */
.main-content {
  padding: 2rem 0;
}

/* Contact Info */
.contact-info {
  margin-bottom: 2rem;
}

/* Contact Form */
.contact-form {
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.contact-form button {
  background-color: #002750;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

/* Social Media */
.social-media {
  margin-top: 2rem;
}

.social-media a {
  color: #002750;
  margin: 0 0.5rem;
  font-size: 1.5rem;
}

/* Footer */
.footer {
  background-color: #002750;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

/* Media Query for Smaller Screens */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
