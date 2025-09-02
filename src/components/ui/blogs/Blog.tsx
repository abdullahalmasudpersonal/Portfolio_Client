import { TBlog } from '@/types/blog.types';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/Utils/formatDate';

const Blog = (blog: TBlog) => {
    const navigate = useNavigate();
    const { _id, name, image, description, createdAt } = blog;
    return (
        <div className='blogDiv'>
            <div style={{}}>
                <img src={image} alt="blog img" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '5px 5px 0 0' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '-13px' }}>
                <span style={{ background: '#242424ff', borderRadius: '50px', padding: '1px 15px 4px', margin: 'auto', }}><small>{formatDate(createdAt)}</small></span>
            </div>

            <div style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h5 style={{ textAlign: 'center', paddingTop: '10px' }}>{name}</h5>
                <div className="react-quill-container" dangerouslySetInnerHTML={{ __html: description }} />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
                    <Button style={{ background: '#014688ff', color: 'white', }} onClick={() => navigate(`/blog/${_id}`)}>
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
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Blog;