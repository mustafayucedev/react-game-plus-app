import Filter from 'components/Content/Filter/Index';
import Games from 'components/Content/Games/Index';

function Index() {
  return (
    <>
        <section className="filter-and-games">
            <div className="container">
                <div className="row">
                    <Filter />
                    <Games />
                </div>
            </div>
        </section>    
    </>
  )
}

export default Index