import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { filterValueCategory } from '../../../redex/productSlise';
import cl from '../Filter/Filter.module.css';

const Filter = () => {
   const dispatch = useDispatch();
   const defaultValues = {
      title: '',
      price_min: '',
      price_max: '',
   };
   const [values, setValues] = useState(defaultValues);

   const handleChange = ({ target: { value, name } }) => {
      setValues(prevValues => ({ ...prevValues, [name]: value }));
   };

   const handleSubmit = e => {
      e.preventDefault();
   };

   useEffect(() => {
      dispatch(filterValueCategory(values));
   }, [values, dispatch]);

   return (
      <form action="" onSubmit={handleSubmit} className={cl.filter_form}>
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
         {/* <button type="submit">click</button> */}
      </form>
   );
};

export default Filter;
