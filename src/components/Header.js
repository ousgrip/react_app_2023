// function Header (params) {

import { NavLink } from "react-router-dom";

// };

const Header = (params) => {
  // const nav = ['Home','About','Contact']
  const nav = [
    {
      value: "Home",
      id: 1,
      link: ""
    },
    {
      value: "Products",
      id: 2,
      link: "products"
    },
    {
      value: "Button Section",
      id: 3,
      link: "button-section"
    },
    {
      value: "Counter",
      id: 4,
      link: "counter"
    },
    {
      value: "Form",
      id: 5,
      link: "form"
    }
  ];
  return (
    <header className="App-header">
      <nav>
        <ul className="navList">
          {nav
            .filter((item) => item.value === "Home" || "About" || "Contact")
            .map((li, index) => {
              return (
                <li key={li.id}>
                  <NavLink
                    to={`/${li.link}`}
                    className={({ isActive }) =>
                      isActive ? "activeNav" : undefined
                    }
                  >
                    {li.value}
                  </NavLink>
                  {/* <a href={`/${li.link}`}>{li.value}</a> */}
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
