# 🛍️ GearNest - Angular E-Commerce Website

A responsive e-commerce web application built with **Angular** and styled using **Tailwind CSS**. Users can browse products (PCs, mice, keyboards, headphones), log in/register, and add new products using an image URL.

---

## 🚀 Features

- 🏠 **Home & About Pages**  
  - Responsive layout with static content
  - About page includes informative paragraphs

- 📦 **Product Management**  
  - Product Parent Component displays a form and list
  - Product Form allows adding items with:
    - Name
    - Description
    - Image URL
    - Rating
  - Product List displays all added products with dynamic data binding

- 🌐 **Routing**
  - Standalone component support using `loadComponent`
  - Pages include Home, About, Products, Login, Register

- 🌈 **Tailwind CSS Integration**
  - Fully responsive design
  - Modern UI with utility-first classes

- 📄 **Reusable Components**
  - Navigation Bar
  - Footer with social icons (Facebook, LinkedIn, Instagram)

- 🔐 **Authentication Pages**  
  - Login and Register components styled with Tailwind
  - Form inputs with focus support via label clicking

---

## 🛠️ Technologies Used

- Angular 17 (Standalone Component support)
- Tailwind CSS
- TypeScript
- Reactive Forms
- Angular Router

---

## 📦 Getting Started

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/` to view the app.

---

## 📁 Folder Structure (Simplified)

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── product/
│   │   │   │   ├── product-form
│   │   │   │   ├── product-list
│   │   │   ├── navbar/
│   │   │   ├── footer/
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

Crafted with ❤️ using Angular and Tailwind.
