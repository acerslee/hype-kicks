export{}
// import Link from 'next/link';
// import { useRouter } from 'next/router'

// const SignUpPage = () => {
//   const router = useRouter()

//   const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     router.push('/')
//   };
//   return(
//     <section className = "flex items-center justify-center h-70v">
//       <div className = "container mx-auto">
//         <div className = "max-w-md mx-auto my-10">
//           <div className = "text-center">
//             <h1 className = "my-3 text-4xl font-semibold text-gray-600">Sign Up</h1>
//             <p className = "text-gray-500">Enter your user credentials below!</p>
//           </div>
//           <div className = "m-7">
//             <form action = "" onSubmit = {handleSignUpSubmit}>
//               <div className = "mb-6">
//                 <label
//                   htmlFor = "email"
//                   className = "block mb-2 text-sm text-gray-600"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type = "email"
//                   name = "email"
//                   className = "w-full px-3  py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700"
//                 />
//               </div>
//               <div className = "mb-6">
//                 <label
//                   htmlFor = "password"
//                   className = "block mb-2 text-sm text-gray-600"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type = "password"
//                   name = "password"
//                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
//                   title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required
//                   className = "w-full px-3  py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700"
//                 />
//               </div>
//               <div className = "mb-6">
//                 <label
//                   htmlFor = "confirm-password"
//                   className = "block mb-2 text-sm text-gray-600"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type = "password"
//                   name = "password"
//                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
//                   title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required
//                   className = "w-full px-3  py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700"
//                 />
//               </div>
//               <div className = "mb-6">
//                 <button
//                   type = "submit"
//                   className = "w-full px-3 py-4 text-white bg-green-900 rounded-md focus:bg-green-300 focus:outline-none"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//               <Link href = "/login">
//                 <p className = "text-sm text-center text-gray-400 hover:text-purple-700 cursor-pointer">Already have an account? Login here</p>
//               </Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SignUpPage;