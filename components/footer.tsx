const Footer = () => {

  const date = new Date().getFullYear();

  return(
    <footer className = "bg-green-900 text-center p-6 mt-auto">
      <p className = "text-white">©{date} Hype Kicks</p>
    </footer>
  )
}

export default Footer;