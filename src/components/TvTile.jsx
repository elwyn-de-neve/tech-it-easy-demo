import createProductName from "../helpers/createProductName.js";
import createProductPrice from "../helpers/createProductPrice.js";
import createScreenSizesString from "../helpers/createScreenSizesString.js";
import check from "../assets/check.png";
import minus from "../assets/minus.png";
import soldOut from "../assets/out-of-stock.png";

function TvTile({tvObj, variant }) {
    return (
        <article key={tvObj.type} className={`product product-${ variant }`}>
                    <span className="product-image">
                        <img src={tvObj.sourceImg} alt="Afbeelding van het product"/>
                    </span>
            <div className="product-info">
                <h3>{createProductName(tvObj)}</h3>
                <p className="product-price">{createProductPrice(tvObj.price)}</p>
                <p>{createScreenSizesString(tvObj.availableSizes)}</p>
                <ul className="option-list">
                    {tvObj.options.map((option) => {
                        if (option.applicable) {
                            return <li key={`${tvObj.type}-${option.name}`}><img src={check}
                                                                                 className="icon"
                                                                                 alt="Icoon: aanwezig"/>{option.name}
                            </li>
                        } else {
                            return <li key={`${tvObj.type}-${option.name}`}><img src={minus}
                                                                                 className="icon"
                                                                                 alt="Icoon: niet aanwezig"/>{option.name}
                            </li>
                        }
                    })}

                </ul>
            </div>
            {tvObj.originalStock === tvObj.sold && <img className="sold-out" src={soldOut} alt="sold-out"/>}
        </article>
    );
}

export default TvTile;