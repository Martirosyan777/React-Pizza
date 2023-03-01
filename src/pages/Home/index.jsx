import NavBtns from "../../components/NavBtns";
import "../../components/Main.scss";
import PizzaCards from "../../components/Pizzas";

function Home() {
    return (
        <div className="content">
            <div className="content_container">
                <div className="content_top">
                    <div className="content_top_categories">
                        <NavBtns />
                    </div>
                </div>

                <h2 className="content_title">Все пиццы</h2>


                <div className="content_items">
                    <PizzaCards />
                </div>
            </div>
        </div>
    )
}

export default Home;