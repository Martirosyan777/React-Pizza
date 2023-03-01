function NavBtns() {
    const Btns = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  
    return (
      <ul>
        {Btns.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }

export default NavBtns;