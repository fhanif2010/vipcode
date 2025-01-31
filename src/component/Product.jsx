import Button from "./button";

const Product = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="align-center bg-gray-800 max-w-sm rounded-lg shadow p-4">
                    <img src="/Images/star.png" alt="product" className="p-8 mb-5" />
                    <div className="mb-4">
                        <h1 className="text-white text-xl font-bold tracking-tight">Jualan Bintang</h1>
                        <p className="text-white text-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam dolores possimus ratione velit similique vel, perferendis saepe sunt exercitationem iste incidunt quo? Quae, laudantium veritatis accusamus nihil asperiores non.</p>
                    </div>
                    <div className="flex justify-between text-white items-center gap-6">
                        <span className="text-3xl font-bold">Rp.4.000.000</span>
                        <Button title="Add to chart"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;