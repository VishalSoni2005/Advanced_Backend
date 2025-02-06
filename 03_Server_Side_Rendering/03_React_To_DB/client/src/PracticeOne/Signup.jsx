// import { useState } from "react";
// import { signupUser } from "../services/api";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     await signupUser({
//       name: name,
//       email: email,
//       password: password,
//     });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-800">
//       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
//         <div className="mb-8 text-center">
//           <h1 className="my-3 text-4xl font-bold">Sign up</h1>
//           <p className="text-sm dark:text-gray-600">
//             Signup to sign in to access your account
//           </p>
//         </div>

//         <form
//           onSubmit={handleSignup}
//           noValidate=""
//           action=""
//           className="space-y-">

//           <div className="">
//             <label htmlFor="name" className="block  text-sm">
//               Name
//             </label>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Leroy Jenkins"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm">
//               Email address
//             </label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               name="email"
//               id="email"
//               placeholder="leroy@jenkins.com"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//             />
//           </div>

//           <div className="space-y-6">
//             <label htmlFor="email" className="block mb-2 text-sm">
//               password
//             </label>
//             <div className="flex justify-between mb-2">
//               <input
//                 type="password"
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//                 placeholder="*****"
//                 className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div>
//               <button
//                 type="button"
//                 className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
//                 Sign up
//               </button>
//             </div>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { signupUser } from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await signupUser({ name, email, password });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h2>Register</h2>
      <div className="flex flex-col items-center bg-yellow-900 p-4 rounded-md">
        {message && <p>{message}</p>}
        <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
