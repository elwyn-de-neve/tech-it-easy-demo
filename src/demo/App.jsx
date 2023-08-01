import {inventory} from "../constants/inventory.js";

{   inventory.map((tv) => {
        return (
            <article className="product" key={tv.type}>
                            <span className="product-image">
                                <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                <div className="product-info">
                    <h3>{createProductName(tv)}</h3>
                    <p className="product-price">{createProductPrice(tv.price)}</p>
                    <p>{createScreenSizesString(tv.availableSizes)}</p>
                    <ul className="option-list">
                        {tv.options.map((option) => {
                            if (option.applicable === true) {
                                return <li key={`${tv.type}-${option.name}`}><img src={check} alt="Icoon: aanwezig"
                                                                                  className="icon"/>{option.name}</li>
                            } else {
                                return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="Icoon: niet aanwezig"
                                                                                  className="icon"/>{option.name}</li>
                            }
                        })}
                    </ul>
                </div>
            </article>
        )
    })
}

