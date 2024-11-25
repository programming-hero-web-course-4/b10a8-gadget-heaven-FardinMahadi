const Footer = () => {
  return (
    <footer className="text-black bg-white">
      <div className="container mx-auto flex flex-col justify-center items-center py-10 gap-10">
        <div className="flex flex-col justify-center items-center border-b sm:w-2/3 pb-3">
          <h2 className="text-3xl font-bold">Gadget Heaven</h2>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="md:w-2/4 flex justify-between text-center">
          <ul>
            <li className="font-bold mb-2">Services</li>
            <li className="text-gray-500">Product Support</li>
            <li className="text-gray-500">Order Tracking</li>
            <li className="text-gray-500">Shipping & Delivery</li>
            <li className="text-gray-500">Returns</li>
          </ul>
          <ul>
            <li className="font-bold mb-2">Company</li>
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">Contact</li>
          </ul>
          <ul>
            <li className="font-bold mb-2">Legal</li>
            <li className="text-gray-500">Terms of Service</li>
            <li className="text-gray-500">Privacy Policy</li>
            <li className="text-gray-500">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
