// import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//       <nav className="flex justify-between items-center p-4 bg-red-600 text-white">
//         <h1 className="text-xl font-bold">MovieShow</h1>
//         <div className="space-x-4">
//           {!user ? (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </>
//           ) : (
//             <button onClick={() => setUser(null)}>Logout</button>
//           )}
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// function Login({ setUser }) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setUser({ email }); // dummy auth
//     navigate("/");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 w-full mb-3"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 w-full mb-3"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="bg-red-600 text-white w-full py-2 rounded">Login</button>
//       </form>
//     </div>
//   );
// }

// function Signup() {
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     navigate("/login");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
//         <input type="text" placeholder="Name" className="border p-2 w-full mb-3" />
//         <input type="email" placeholder="Email" className="border p-2 w-full mb-3" />
//         <input type="password" placeholder="Password" className="border p-2 w-full mb-3" />
//         <button className="bg-red-600 text-white w-full py-2 rounded">Signup</button>
//       </form>
//     </div>
//   );
// }

// function Home() {
//   const movies = ["Jawan", "Animal", "Pathaan", "KGF 2"];

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6">Now Showing</h2>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {movies.map((movie, i) => (
//           <div key={i} className="border p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">{movie}</h3>
//             <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded">
//               Book Ticket
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


