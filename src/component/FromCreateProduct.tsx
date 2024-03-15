import { Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';

export type AddProducts = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ErrorType = {
  title?: string;
  price?: string;
};
type CreateProductFormProps = {
  getDataForm: (product: AddProducts) => void;
}

const FromCreateProduct: React.FC<CreateProductFormProps> = ({getDataForm}) =>{
  const [products, setProducts] = useState<AddProducts>({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });

  useEffect (() => {
    getDataForm(products);
  },[products , getDataForm]);

  const [error, setError] = useState<ErrorType>({});

  useEffect(() => {
    const newError: ErrorType = {};
    if (products.title.length &&  products.title.length < 3) {
      newError.title = 'Title must be at least 3 characters';
    }
    if (products.price <= 0) {
      newError.price = 'Price must be greater than 0';
    }
    setError(newError);
  }, [products.title, products.price]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      [id]: value,
    }));
  };

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product title" />
        </div>
        <TextInput
          id="title"
          type="text"
          placeholder="T-shirt"
          required
          value={products.title}
          onChange={handleChange}
        />
        {error.title && <p className="text-red-200 text-xs">{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product price" />
        </div>
        <TextInput
          id="price"
          type="number"
          required
          value={products.price}
          onChange={handleChange}
        />
        {error.price && <p className="text-red-200 text-xs">{error.price}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product description" />
        </div>
        <textarea
          id="description"
          placeholder="Product description"
          value={products.description}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default FromCreateProduct;
