import Search from 'components/Content/Search/Index';
import Sort from 'components/Content/Sort/Index';
import FilterGamesLayout from 'components/Content/FilterGamesLayout/Index';

function Index() {
  return (
    <>
        <main>
            <Search />
            <Sort />
            <FilterGamesLayout />
         </main>
    </>
  )
}

export default Index