const Search = window.location.origin + "/images/icon-search.svg";


function Index() {

    const searchResult = (e) => {
        const result = document.querySelector(".search-result");

        if(e.target.value.length > 0) {
            result.classList.add("active");
        }
        else {
            result.classList.remove("active");
        }

        e.preventDefault();
    }

  return (
    <>
        <section className='search-section'>
            <div className="container">
               <div className="search">
                    <div className="search-header">
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <h2>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</h2>
                    </div>
                    <div className="search-content">
                        <form>
                            <input type="text" placeholder='Search Games' onChange={searchResult} />
                            <img src={Search} alt="Search Games" />
                        </form>
                        <div className="search-result">
                            <ul> </ul>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    </>
  )
}

export default Index