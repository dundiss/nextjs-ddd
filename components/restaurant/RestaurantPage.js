import { useState } from "react"

import classes from "./RestaurantPage.module.css";

function RestaurantPage({ data }) {
    const [displayBasketContent, setDisplayBasketContent] = useState(true);
    const [canValidateBasketContent, setCanValidateBasketContent] = useState(true);
    const [baskeElemNumber, setBaskeElemNumber] = useState(0);
    const [basket, setBasket] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const shippinpCost = 2.5;

    console.log("data--", data);
    const handleIncrease = (id) => {
        const foundOrder = basket.find(element => element.id === id);
        console.log("foundOrder ", foundOrder);
        if (foundOrder) {
            const order = [...basket];
            order[order.indexOf(foundOrder)].counter += 1;

            setBasket(order);

            setSubTotal(subTotal + Number(foundOrder.price));

            setBaskeElemNumber(baskeElemNumber + 1);
        }
    }

    const handleDecrease = (id) => {
        const foundOrder = basket.find(element => element.id === id);
        console.log("foundOrder ", foundOrder);
        if (foundOrder) {
            let order = [...basket];
            const index = order.indexOf(foundOrder);
            order[index].counter -= 1;

            if (order[index].counter === 0) {
                order.splice(order.indexOf(foundOrder), 1);
            }

            setBasket(order);

            setSubTotal(subTotal - Number(foundOrder.price));

            setBaskeElemNumber(baskeElemNumber - 1);
        }
    }


    const handleOrder = (meal) => {
        if (meal && (meal.daySelection || meal.nextDaySelection)) {
            const newOrder = [...basket];
            const foundOrder = newOrder.find(element => element.id === meal.id);
            if (foundOrder) {
                newOrder[newOrder.indexOf(foundOrder)].counter += 1;
            }
            else {
                const order = { "id": meal.id, "title": meal.title, "price": meal.price, "counter": 1 };
                newOrder.push(order);
            }
            console.log(foundOrder);

            setBasket(newOrder);

            setSubTotal(subTotal + Number(meal.price));

            setBaskeElemNumber(baskeElemNumber + 1);

            if (displayBasketContent) {
                setCanValidateBasketContent(true);
            }
        }
    }

    const closeHandler = () => {
        setDisplayBasketContent(false);
        setCanValidateBasketContent(true);
    }

    const showBasketContent = () => {
        setDisplayBasketContent(true);
        setCanValidateBasketContent(false);
    }

    const handleValidation = () => {
        alert("Désolé, cette partie est encore en construction");
    }

    return (
        <div className={classes.main}>
            <div className={classes.heroElements}>
                <div className="restaurantDesc">
                    <h2>{data.restaurant.name}</h2>
                    <p>{data.restaurant.description}</p>
                </div>
                <img src={data.restaurant.picture} alt={`ìmage-${data.restaurant.name}`} />
            </div>
            {
                data?.categories?.map((categorie, index) => {
                    console.log("Category:", categorie);
                    return (
                        <div key={index} className={classes.categories}>
                            {(categorie.meals?.length > 0) && <h3 className={classes.primarySubtile}>{categorie.name}</h3>}
                            <div className={classes.categoriesGrid}>
                                {categorie.meals?.map((meal) => {
                                    return (
                                        <div key={meal.id} className={classes.meals}
                                            onClick={(() => { handleOrder(meal) })}
                                        >
                                            {meal.daySelection && <div className={classes.badge}>PLAT DU JOUR</div>}
                                            {meal.nextDaySelection && <div className={classes.nextDayBadge}>POUR DEMAIN</div>}
                                            <div className={classes.mealsDesc}>
                                                <h4 className={classes.secondarySubtile}>{meal.title}</h4>
                                                <p>{meal.description}</p>
                                                <div className={classes.mealsPrice}>
                                                    <span>{meal.price} €</span>
                                                    {meal.popular && <i className={classes.fas, classes.faStar}><span> Populaire</span></i>}
                                                </div>
                                            </div>
                                            {meal.picture && <img className={classes.mealImage} src={meal.picture} alt={`im-respas-${meal.id}`} />}
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })
            }
            <div className={classes.basket}>
                <span className={displayBasketContent && basket.length ? classes.cartClose : classes.hideCartClose} onClick={closeHandler}><a>X</a></span>
                <div className={classes.cartContent}>
                    <button className={basket.length === 0 ? classes.emptyBasket : canValidateBasketContent && !displayBasketContent ? classes.hideBasket : classes.filledBasket} onClick={handleValidation}>Valider mon panier
                    </button>
                    <div className={!displayBasketContent ? classes.minusCart : classes.hideMinusCart} onClick={showBasketContent}><span>{baskeElemNumber}</span><span>Voir le panier</span><span>{(subTotal + shippinpCost).toFixed(2)} €</span>
                    </div>
                    {!basket.length && <p>Votre panier est vide</p>}
                    <div className={!displayBasketContent && classes.basketContent__elements}>
                        {
                            basket.map(({ id, title, price, counter }, indexOrder) => {
                                return (
                                    <div key={indexOrder} className={classes.basketElements}>
                                        <div className={classes.basketLeftCol}>
                                            <button onClick={() => { handleDecrease(id) }}>-</button>
                                            <span>{counter}</span>
                                            <button onClick={() => { handleIncrease(id) }}>+</button>
                                        </div>
                                        <span>{title}</span>
                                        <span>{(price * counter).toFixed(2)} €</span>
                                    </div>
                                )
                            })
                        }

                        {
                            basket.length > 0 &&
                            <div>
                                <div className={classes.line}></div>
                                <div className={classes.subTotal}>
                                    <span>Sous-total</span>
                                    <span>{subTotal.toFixed(2)} €</span>
                                </div>
                                <div className={classes.fees}>
                                    <span>Frais de livraison</span>
                                    <span>{shippinpCost} €</span>
                                </div>
                                <div className={classes.line}></div>
                                <div className={classes.total}>
                                    <span>Total</span>
                                    <span>{(subTotal + shippinpCost).toFixed(2)} €</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;