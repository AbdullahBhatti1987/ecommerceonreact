import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { SearchContext } from "../context/SearchContext";

function Header() {
  const { user } = useContext(UserContext);
  const { search, setSearch} = useContext(SearchContext);

  console.log("Search =>", search)
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate("/auth/signin");
  };
  const HandleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("user successfully signout");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="sm:px-6 lg:w-full">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <PlayCircleOutlined className="mr-6 text-2xl" boolean="false" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-3"> 
        <input type="search" onChange={(e)=>{setSearch(e.target.value.toLocaleLowerCase())}} className="rounded-md border border-gray-200 border-2 text-sm focus:border-gray-200 focus:bg-gray-100 hidden md:inline-block lg:inline-block" />
          {user.isLogin ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="Picture Masala Kar rahi hai" img={user.photoURL} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm text-left">{user.username}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={HandleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Button onClick={HandleLogin}>Login</Button>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>Home</Link>
          <Link to={"bestseller"}>Best Seller</Link>
          <Link to={"products"}>Products</Link>
          <Link to={"aboutus"}>About Us</Link>
          <Link to={"contactus"}>Contact Us</Link>
        </Navbar.Collapse>
      </Navbar>
      <input type="search" className=" w-10/12 px-12 rounded-md border border-gray-200 border-2 text-sm focus:border-gray-200 focus:bg-gray-100 md:hidden lg:hidden"/>
    </div>
  );
}
export default Header;
