import Title from "./Title.jsx";

function SalesTile({ title, inventoryAmount, variant }) {
    return (
        <article className={ `dashboard-item items-${ variant }` }>
            <Title title={ title }/>
            <h2>{ inventoryAmount }</h2>
        </article>
    );
}

export default SalesTile;