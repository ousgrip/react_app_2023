// function Header (params) {


// };

const Header = (params) => {
    // const nav = ['Home','About','Contact']
    const nav = [
        {
            value: 'Home',
            id: 1,
            link: ""
        },
        {
            value: 'About',
            id: 2,
            link: "About"
        },
        {
            value: 'Contact',
            id: 3,
            link: "Contact"
        }
    ]
    return (
        <header className="App-header">
        <nav>
          <ul>
            {nav
              .filter((item) => item.value === 'Home' || 'About' || 'Contact')
              .map((li,index) => {
                return (
                  <li key={li.id}>
                    <a href={`/${li.link}`}>{li.value}</a>
                    </li>
                );
              })}
          </ul>
        </nav>
      </header>
    )

};

export default Header;
