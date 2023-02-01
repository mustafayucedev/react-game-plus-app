import { useFilter } from '../../../context/filter';

function Index() {

    const { filter,setFilter } = useFilter();
    const { open,setOpen } = useFilter();

    const sortDropdown = () => {
        setOpen(!open);
    }

    const sortFirst = () => {
        setFilter([...filter.sort((a, b) => a.id - b.id)])
        setOpen(false);
    }
    
    const sortLast = () => {
        setFilter([...filter.sort((a, b) => b.id - a.id)])
        setOpen(false);
    }

  return (
    <>
        <section className="sort-section">
            <div className="container">
                <div className="sort">
                    <div className="sort-title">
                        <h3>Browse Games</h3>
                    </div>
                    <div className="sort-content">
                        <button type="button" onClick={sortDropdown}>Title A-Z</button>
                        {open ?  (
                            <div className="sort-dropdown">
                                <button type="button" id="sort-first" onClick={sortFirst}> Title A-Z </button>
                                <button type="button" id="sort-last" onClick={sortLast}> Title Z-A </button>
                            </div>
                        ) : false}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Index