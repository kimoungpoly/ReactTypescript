import { useEffect , useState } from "react";
import CardComponent from "./Card/CardComponent";
import LoadingComponent from "../Loader/LoadingComponent";

export type Products = {
  readonly id?:number;
  title : string;
  description : string;
  image : string;
};

const HomeComponent = () => {
  const [getProduct, setGetProduct] = useState<Products[]>();
  const [loading , setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const fetchData = await fetch('https://fakestoreapi.com/products');
      const res = await fetchData.json();
      console.log(res);
      setGetProduct(res);

    }catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }
  useEffect(() =>{
    fetchData();
  }, []);
  return(
    <div>
       {loading ? (
         <LoadingComponent />
       ): (
         <div className="flex justify-center gap-4 flex-wrap">
           {getProduct?.map((pro , index ) => (
             <CardComponent
              key={index} 
              image={pro.image}
              title={pro.title}
              description={pro.description}
              />
           ))}
      </div>
      )};
    </div>
  );

};
export default HomeComponent;