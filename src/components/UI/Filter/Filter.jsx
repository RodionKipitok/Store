import { useState } from 'react';

import cl from '../Filter/Filter.module.css';

const Filter = () => {
   const defaultValues = {
      title: '',
      price_min: 0,
      price_max: 0,
   };
   const [values, setValues] = useState(defaultValues);
   console.log(values);
   // const dispatch = useDispatch();

   const handleChange = ({ target: { value, name } }) => {
      setValues(prevValues => ({ ...prevValues, [name]: value }));
      console.log(value, name);
   };

   // const handleSubmit = event => {
   //    event.preventDefault();

   // };

   return (
      <form action="" className={cl.filter_form}>
         <input
            onChange={handleChange}
            className={cl.filter_form_input}
            type="text"
            name="title"
            placeholder="name-goods"
            value={values.title}
         />
         <input
            onChange={handleChange}
            className={cl.filter_form_input}
            type="number"
            name="price_min"
            placeholder="min-price"
            value={values.price_min}
         />
         <input
            onChange={handleChange}
            className={cl.filter_form_input}
            type="number"
            name="price_max"
            placeholder="max-price"
            value={values.price_max}
         />
      </form>
   );
};

export default Filter;
