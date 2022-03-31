import { useSearchParams } from 'react-router-dom';
import style from './Search.module.css';

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
        <div className={style.searchBox}>
            <input 
                className={style.searchInput} 
                type="text" 
                placeholder='Search'
                value={search ?? ""}
                onChange={(e)=> {
                    const value = e.target.value;
                    setQuery({search: value});
                    }
                } />
        </div>
    </form>
  )
}