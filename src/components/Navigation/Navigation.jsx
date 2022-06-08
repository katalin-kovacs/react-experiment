import { menu } from "../../data/menu";

function Navigation() {
  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
