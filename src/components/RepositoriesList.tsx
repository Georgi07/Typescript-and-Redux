import {useState} from 'react';
import {useActions} from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {

   const [term, setTerm] = useState('');
   const {data, error, loading} = useSelector((state) => state.repositories);

   const { searchRepositories } = useActions();
  
   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
   };

   return (
       <div>
           <form onSubmit={onSubmit}>
               <input value={term} onChange={(event) => setTerm(event.target.value)} />
               <button>Search</button>
           </form>
           {error && <h3>{error}</h3>}
           {loading && <h3>...Loading</h3>}
           {!error && !loading &&
             data.map((name, key) => (
                  <p key={key}>{name}</p>
             ))
            }
       </div>
   );
};

export default RepositoriesList;