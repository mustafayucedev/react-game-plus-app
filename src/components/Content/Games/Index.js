import GamesItem from 'components/Content/Games/GamesItem';
import { useFilter } from '../../../context/filter';

function Index() {
  const { filter } = useFilter();
  return (
    <>
      <div className="col-lg-7">
            <aside className="games">
              {filter && filter.map((data,index) => <GamesItem key={index} data={data} /> )}
            </aside>
      </div>
    </>
  )
}

export default Index