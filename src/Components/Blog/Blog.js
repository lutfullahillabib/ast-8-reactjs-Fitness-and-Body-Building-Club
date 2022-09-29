// import React from 'react';

// const Blog = () => {
//     return (
//         <div id='blog'>

//             <header>
//                 <h1 id="blog-title" class="text-center mt-4 flex-lg-1 fw-bold">Blog, Questions!</h1>
//             </header>

//             <!-- header starts -->
//             <header>
//                 <!-- navbar starts -->

//                 <!-- boradCast navbar start -->
//                 <div class="container">
//                     <nav class="navbar navbar-expand-lg">
//                         <div class="container-fluid">
//                             <a class="navbar-brand" href="#"><span class="nav-blog">BlogSite</span></a>
//                             <button
//                                 class="navbar-toggler"
//                                 type="button"
//                                 data-bs-toggle="collapse"
//                                 data-bs-target="#navbarText"
//                                 aria-controls="navbarText"
//                                 aria-expanded="false"
//                                 aria-label="Toggle navigation"
//                             >
//                                 <span class="navbar-toggler-icon"></span>
//                             </button>
//                             <div class="collapse navbar-collapse" id="navbarText">
//                                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                                     <li class="nav-item">
//                                         <a class="nav-link active" aria-current="page" href="#"
//                                         ><span class="nav-blog">Home</span></a
//                                         >
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="#"></a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="#"></a>
//                                     </li>
//                                 </ul>
//                                 <span class="navbar-text">
//                                     <a href="./index.html"><span class="nav-blog">Information</span></a>
//                                 </span>
//                                 <div>
//                                     <span class="navbar-text text-decoration-none ms-4">
//                                         <a href="blog.html"><span class="nav-blog">blog</span></a>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                     <div class="w-auto justify-content-center align-items-center mb-5 ">
//                         <div class="divider-container">
//                             <div class="line"></div>
//                             <h1 class="title2">Blog</h1>
//                             <div class="line"></div>
//                         </div>
//                         <div id="blogs"></div>
//                     </div>
//                 </div>
//         </div>  
//     </header >



//     < !--cards added-- >
//     <main>
//         <section class="container mb-4">
//             <div class="row row-cols-1 row-cols-md-3 g-4">
//                 <div class="col">
//                     <div class="card">
//                         <div class="card-body card-design">
//                             <h5 class="blog-question bg-dark text-white p-4 rounded-3">Difference between sessionStorage and localStorage</h5>
//                             <p>
//                                 <div class="card-text blog-text">
//                                     <span class="sessionStorage-title">sessionStorage: </span> sessionStorage is similar to  localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab.
//                                 </div>
//                                 <br>
//                                     <div class="card-text blog-text">
//                                         <span class="localStorage-title">LocalStorage: </span>  Local Storage is a web storage method that helps us store data on the client's computer in the form of key/value pairs in a web browser. The data is stored in local storage for a lifetime unless the user manually deletes it from the browser. It does not expire even when the user closes the window or tab. Instead, the data remains in the browser until and unless the browser's memory is cleared.
//                                     </div>
//                             </p>
//                         </div>
//                     </div>
//                 </div>


//                 <div class="col">
//                     <div class="card">

//                         <div class="card-body card-design ">
//                             <h5 class="blog-question bg-dark text-white p-4 rounded-3">How does JavaScript undefined work?</h5>
//                             <p>
//                                 <div class="card-text blog-text">
//                                     <span class="undefined-title">Undefined: </span>  We will get 8 ways undefined value when we call a non-existent property or method of an object. Assigining an uninitialize variable, calling A function without a parameter, accessing element out of the boundary in an array,
//                                 </div>
//                                 <br>
//                                     <div class="card-text blog-text">
//                                         accessing non existing property in an object, calling a function which has nothig right side of return., accessing delete element an array, declare an undefiend varialbe.Sum does not return any result but still we try to assign its resulted value to a variable. So in this case, result will be undefined.
//                                     </div>
//                             </p>
//                         </div>
//                     </div>
//                 </div>


//                 <div class="col">
//                     <div class="card">
//                         <div class="card-body card-design">
//                             <h5 class="blog-question bg-dark text-white p-4 rounded-3">Difference between global  scope and block scope.</h5>
//                             <p >
//                                 <div class="card-text blog-text">
//                                     <span class="globalScope-title">globalScope: </span> Global variables are useful for values that are relatively constant, or that many functions in the script must access, such as a session id. A local variable, however, has a limited scope: it exists only within the block that it is declared in. Once that block ends, the variable is destroyed and its values lost .
//                                 </div>
//                                 <br>
//                                     <div class="card-text blog-text">
//                                         <span class="blockScope-title">blockScope: </span> A variable when declared inside  the if or switch conditions or inside for or while loops, are accessible within  that particular condition or loop.
//                                     </div>
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col">
//                     <div class="card">
//                         <div class="card-body card-design">
//                             <h5 class="blog-question bg-dark text-white p-4 rounded-3">How does java even loop work.</h5>
//                             <p class="card-text blog-text"><span class="javaEven-title">Java-even-loop: </span>   Eventloop is an infinite loop, where at each iteration all the tasks that the Selector  provides and that are stored in special queues are executed. Each of these tasks must be small, and its execution is called a tick . The only blocking operation of the Eventloop infinite loop is Selector.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>

    

//         </div >
//     );
// };

// export default Blog;