export {}
// import Link from 'next/link';
// import { useRouter } from 'next/router'

// const LoginPage = () => {
//   const router = useRouter()

//   const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     router.push('/')
//   };

//   return(
//     <section className = "flex items-center justify-center h-70v">
//       <div className = "container mx-auto">
//         <div className = "max-w-md mx-auto my-10">
//           <div className = "text-center">
//             <h1 className = "my-3 text-4xl font-semibold text-gray-600">Sign in</h1>
//             <p className = "text-gray-500">Please put in your login credentials below</p>
//           </div>
//           <div className = "m-7">
//             <form action = "" onSubmit = {handleLoginSubmit}>
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
//                   className = "w-full px-3  py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700" />
//               </div>
//               <div className = "mb-6">
//                 <button
//                   type = "submit"
//                   className = "w-full px-3 py-4 text-white bg-green-900 rounded-md focus:bg-green-300 focus:outline-none"
//                 >
//                   Sign in
//                 </button>
//               </div>
//               <Link href = "/signup">
//                 <p className = "text-sm text-center text-gray-400 hover:text-purple-700 cursor-pointer" >Don't have an account yet? Sign up here</p>
//               </Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default LoginPage;