import { useState } from 'react';
import Menu from './Menu';
export default function DataOfMenu(){
    const [MenuList, setMenuList] = useState([{
        
        sn: 1,
        title: "Greek Pizza",
        price: "$170.00",
        desc: "Feta cheese, Kalamata olives, spinach, and red onions",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYjv1so_CBiaU0sfWNMoXhV_9zlEM-eDr50mRqGCp8IiXzPXVlbe5-nxB3QWYO1xYXiI&usqp=CAU",
        remaining: "0",
    },

    {
        sn: 2, 
        title: "Pepperoni Pizza",
        price: "$190.00",
        desc: "omato sauce, mozzarella cheese & pepperoni slices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYWUM5Lpw8wwHe5aK6e9R4o1OOwI4XRsPLg&usqp=CAU",
        remaining: "10",
    },

   
    {
        sn: 3, 
        title: "Chicago pizza",
        price: "$190.00",
        desc: "Deep-dish delight featuring tomato sauce, mozzarella, Italian sausage, and green peppers..",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEwM51kBWA4KFBctfFwG3QkXS7BPlO7zOTA&usqp=CAU",
        remaining: "0",
    },


    {
        sn: 4, 
        title: "Italian Sausage Lasagna",
        price: "$130.00",
        desc: "Layers of flavor with tomato sauce, mozzarella, hearty Italian sausage, and creamy ricotta cheese. ",
        image: "https://mojo.generalmills.com/api/public/content/uazPUdqy106O3ScjRZqLIw_gmi_hi_res_jpeg.jpeg?v=7165e1e2&t=466b54bb264e48b199fc8e83ef1136b4",
        remaining: "2",
    },

    {
        sn: 5, 
        title: "Cavatappi",
        price: "$120.00",
        desc: "tomato sauce, melted mozzarella, fresh spinach, and a touch of creamy",
        image: "https://lundsandbyerlys.com/wp-content/uploads/2014/07/Screen-Shot-2016-02-24-at-11.10.38-AM-480x330.png",
        remaining: "9",
    },
    
    {
        sn: 6, 
        title: "Orecchiette",
        price: "$120.00",
        desc: "savory tomato sauce, melted mozzarella, delicate spinach, and a dollop of creamy ricotta cheese.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUzzmtuDRB46ElFzrAmf3h8Kkk0K4C-wYHQ&usqp=CAU",
        remaining: "2",
    
    
    }]);


    return(
        <>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", marginTop:"30px", marginLeft:"100px" , width: "1000px"}}>
            {MenuList.map((menuDetail) =>(
                <div>
                    <Menu menuDetail={menuDetail}/>
               </div>
            ))}
        </div>
        <div>
            <p className='Lastpara'>Order Youe Menu and get 10% Off</p>
            <button className='Ordernow'>Order Now</button>
        </div>
        </>
    )
}
