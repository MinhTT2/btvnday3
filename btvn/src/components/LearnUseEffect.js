import React, { useContext, useEffect, useState } from "react";
import MyContext from "./Context";

function LearnUseEffect() {
  const [productDetail, setProductDetail] = useState([]);
  const { products } = useContext(MyContext);
  const[productSearch,setProductSearch]=useState([]);
  const userId = 1;
// dung con ai nay nay
  useEffect(() => {
    // Thêm logic của bạn vào đây nếu cần thiết
const listSearch=products.filter((pro)=>pro.userId===userId);
if(listSearch.length){
    setProductSearch(listSearch);
};
console.log("Check dependence");

  }, [userId]);
  
  console.log(products);
  console.log(productSearch);
  
  return (
    <div>
      {
        products.map((pro, ind) => (
          <div key={pro.id}>
            <h4>{pro.title}</h4>
          </div>
        ))
      }
    </div>
  );
}

export default LearnUseEffect;
