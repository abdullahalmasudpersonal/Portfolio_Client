import { TBlog } from '@/types/blogs.types';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Blog = (blog: TBlog) => {
    const { name, image, description, date } = blog;
    return (
        <div className='blogDiv'>
            <div style={{}}>
                <img src={image} alt="blog img" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '5px 5px 0 0' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '-13px' }}>
                <span style={{ background: '#242424ff', borderRadius: '50px', padding: '1px 15px 4px', margin: 'auto', }}><small>{date}</small></span>
            </div>

            <div style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h5 style={{ textAlign: 'center', paddingTop: '10px' }}>{name}</h5>
                <p style={{ margin: '0', fontWeight: '700', flexGrow: 1 }}>{description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} className="bolg-read-more">
                    <button>
                        <span>Read More </span>
                        <span>
                            <FontAwesomeIcon
                                style={{ height: "12px" }}
                                icon={faChevronRight}
                            />
                            <FontAwesomeIcon
                                style={{ height: "12px" }}
                                icon={faChevronRight}
                            />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;