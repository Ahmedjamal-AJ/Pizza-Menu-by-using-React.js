export default function Menu({menuDetail}){
    console.log("MenuItems", menuDetail);
    return(
        <div className="maindiv">
            <div className="Imagediv">
                <img src={menuDetail.image} alt="Menutitle" className="Image"/>
            </div>

            <div className="details">
                <h4 className="title">{menuDetail.title}</h4>
                <h5 className="price">{menuDetail.price}</h5>
                <h5 className="Desc">{menuDetail.desc}</h5>
                <h6 className="remaining">{menuDetail.remaining == 0 ? "Sold Out" : menuDetail.remaining}</h6>
            </div>
        
        </div>
    )
}
