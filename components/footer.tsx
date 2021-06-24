const Footer = () => {

  const date = new Date().getFullYear();

  return(
    <footer className = "bg-green-900 text-center p-4 md:text-right">
      <p className = "text-white">{date} - Created by Alex Lee</p>
    </footer>
  )
}

export default Footer;