const pizzas = [
    {
      id: 1,
      name: 'Чизбургер-пицца',
      photo: './src/img/content/pizzas/img_1.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 395,
      category: ''
    },
    {
      id: 2,
      name: 'Сырная',
      photo: './src/img/content/pizzas/img_2.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 355,
      category: ''
    },
    {
      id: 3,
      name: 'Креветки по-азиатски',
      photo: './src/img/content/pizzas/img_3.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 700,
      category: ''
    },
    {
      id: 4,
      name: 'Сырный цыпленок',
      photo: './src/img/content/pizzas/img_4.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 445,
      category: ''
    },
    {
      id: 5,
      name: 'Чизбургер-пицца',
      photo: './src/img/content/pizzas/img_1.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 395,
      category: ''
    },
    {
      id: 6,
      name: 'Сырная',
      photo: './src/img/content/pizzas/img_2.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 355,
      category: ''
    },
    {
      id: 7,
      name: 'Креветки по-азиатски',
      photo: './src/img/content/pizzas/img_3.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 700,
      category: ''
    },
    {
      id: 8,
      name: 'Сырный цыпленок',
      photo: './src/img/content/pizzas/img_4.png',
      hastutyun: 'тонкое',
      sm: '26 см',
      price: 445,
      category: ''
    }
  ];

  

  function PizzaCards() {   


    return (
      <div className="pizza-block-wrapper">
        {pizzas.map(pizza => (
            <div key={pizza.id} className="pizza-block">
            <a href="./full-cart.html">
                <img className="pizza-block_image" src={pizza.photo} alt={pizza.name} />
                <h4 className="pizza-block_title">{pizza.name}</h4>
            </a>
      
            <div className="pizza-block_selector">
                <ul>
                    <li className="active">{pizza.hastutyun}</li>
                    <li>традиционное</li>
                </ul>
                <ul>
                    <li className="active">{pizza.sm}</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                </ul>
            </div>
      
            <div className="pizza-block_bottom">
                <div className="pizza-block_price">от {pizza.price} ₽</div>
                <button className="pizza-block-btn">
                    <span>+ Добавить</span>
                </button>
            </div>
        </div>
        ))}
      </div>
    );
  }

export default PizzaCards;