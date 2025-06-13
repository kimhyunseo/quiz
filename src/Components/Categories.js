
const Categories = ({categories, onSelect}) => {
    return (
        <div className='category'>
            <h1>
                야구 <br /> Quiz 
            </h1>
            <div className='category-wrap'>
                {
                    categories.map((item, idx)=>{
                        return <button key={idx}
                        onClick={()=>{onSelect(item)}}>
                                {item}
                            </button>
                    })
                }
            </div>
            <p className="dodam">@DODAM</p>
        </div>
    );
};

export default Categories;