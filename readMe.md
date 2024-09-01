## Introduction

#### Unihustle is a student-powered freelancing website designed to connect students with freelancing opportunities. The platform provides a job marketplace tailored for students, featuring user-friendly interfaces, real-time updates, and seamless functionality to enhance the overall user experience.

---

## ⚙️ Tech Stack

- **JavaScript**
- **Sass**
- **MongoDB**
- **Express.js**
- **React**
- **Cloudinary**

---

## 🔋 Features

- **User Authentication**: Secure login and registration system for students.
- **MongoDB Database Design**: Efficient storage and retrieval of user and job data.
- **Express API Development**: Robust backend API to handle various user requests.
- **Image Uploading with Cloudinary**: Supports uploading and managing images in the cloud.
- **React Hooks**:
  - **useMutation**: Enables real-time data updates for a dynamic user experience.
  - **useReducer**: Manages complex forms and state for better user interactions.
- **Responsive Design**: Ensures a seamless experience across all devices.

---

## 🛠️ TODO

- **Remove Stripe Integration**: Replace Stripe with a default payment process in the cart to automatically update the order table. Currently, due to Stripe not being connected with GST, manual intervention is needed:
  - Use Postman to manually send a request.
  - Change `paymentDone` to `true` in MongoDB to see updates in the order pages.
  - This process needs to be automated to avoid manual adjustments.

---

