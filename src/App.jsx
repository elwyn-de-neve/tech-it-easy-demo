import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import minus from './assets/minus.png';
import check from './assets/check.png';
import soldOut from './assets/out-of-stock.png'
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateInitialStock from "./helpers/calculateInitialStock.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";
import createProductName from "./helpers/createProductName.js";
import createProductPrice from "./helpers/createProductPrice.js";
import createScreenSizesString from "./helpers/createScreenSizesString.js";
import SalesTile from "./components/SalesTile.jsx";
import TvTile from "./components/TvTile.jsx";

function App() {
    function sortBestSellers() {
        inventory.sort((a, b) => {
            return a.sold - b.sold;
        });

        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        });

        console.log(inventory);
    }

    function sortByScreenSize() {
        inventory.sort((a, b) => {
            const largestScreenSizeA = a.availableSizes[a.availableSizes.length - 1];
            const largestScreenSizeB = b.availableSizes[b.availableSizes.length - 1];
            return largestScreenSizeB - largestScreenSizeA;
        })
        console.log(inventory)
    }


    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard-container">
                    <SalesTile
                        title="Aantal verkochte producten"
                        inventoryAmount={calculateSoldProducts(inventory)}
                        variant="sold"
                    />
                    <SalesTile
                        title="Aantal ingekochte producten"
                        inventoryAmount={calculateInitialStock(inventory)}
                        variant="original"
                    />
                    <SalesTile
                        title="Aantal te verkopen producten"
                        inventoryAmount={calculateProductsToSell(inventory)}
                        variant="to-sell"
                    />
                </div>
                <h3>Beschikbare merken</h3>
                <ul>
                    {inventory.map((tv) => {
                        return (
                            <li key={tv.type}>{tv.brand}</li>
                        )
                    })}
                </ul>
            </section>
            <section className="best-seller-container">
                <h2>Best verkochte tv</h2>
                <TvTile
                    tvObj={bestSellingTv}
                    variant="best-seller"
                />
            </section>
            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={sortBestSellers}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={sortCheapest}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={sortSport}>
                    Meest geschikt voor sport eerst
                </button>
                <button type="button" onClick={sortByScreenSize}>
                    Grootste scherm eerst
                </button>
                {inventory.map((tv) => {
                    return (
                        <TvTile key={tv.type} tvObj={tv}/>
                        /*<article key={tv.type} className="product">
                    <span className="product-image">
                        <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                    </span>
                            <div className="product-info">
                                <h3>{createProductName(tv)}</h3>
                                <p className="product-price">{createProductPrice(tv.price)}</p>
                                <p>{createScreenSizesString(tv.availableSizes)}</p>
                                <ul className="option-list">
                                    {tv.options.map((option) => {
                                        if (option.applicable) {
                                            return <li key={`${tv.type}-${option.name}`}><img src={check}
                                                                                              className="icon"
                                                                                              alt="Icoon: aanwezig"/>{option.name}
                                            </li>
                                        } else {
                                            return <li key={`${tv.type}-${option.name}`}><img src={minus}
                                                                                              className="icon"
                                                                                              alt="Icoon: niet aanwezig"/>{option.name}
                                            </li>
                                        }
                                    })}

                                    {/!*<li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>*!/}
                                    {/!*<li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>*!/}
                                    {/!*<li><img src={check} alt="Icoon: aanwezig" className="icon"/>hdr</li>*!/}
                                    {/!*<li><img src={check} alt="Icoon: aanwezig" className="icon"/>bluetooth</li>*!/}
                                    {/!*<li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>*!/}
                                </ul>
                            </div>
                            {tv.originalStock === tv.sold && <img className="sold-out" src={soldOut} alt="sold-out"/>}
                            {/!*{ tv.originalStock === tv.sold ? <img className="sold-out" src={soldOut} alt="sold-out"/> : ""}*!/}
                        </article>*/
                    )
                })}
            </section>
        </main>
    )
}

export default App
