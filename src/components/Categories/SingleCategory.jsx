import { useParams } from 'react-router-dom';
import Poster from '../Poster/Poster';
import Category from './Category';

const SingleCategory = () => {
   return (
      <>
         <Poster />
         <Category />
      </>
   );
};

export default SingleCategory;
