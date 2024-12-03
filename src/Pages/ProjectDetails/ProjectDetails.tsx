import React from "react";
import { useParams } from "react-router-dom";
import UseProjectDeatils from "../../Hooks/UseProjectDetails";
import "./ProductDetails.css";
import { Carousel } from "react-responsive-carousel";

const ProjectDetails = ({}) => {
  const { id: projectId } = useParams();
  const [projectDetails] = UseProjectDeatils([projectId]);

  // const {} = projectDetails?.data;

  // const porject_img1, porject_img2, porject_img3  = projectDetails?.data

  console.log("sdfk;ljhsd", projectDetails?.data?.porject_img1);

  return (
    <div className="productDetail">
      {/*  <PageTitle pageTitle={`${name}`} /> */}
      <div className="productDetailDev">
        <div className="productDetailDevFrist">
          <Carousel className="text-center pro-detail-casual">
            <div>
              <img src={projectDetails?.data?.porject_img1} />
            </div>
            <div>
              <img src={projectDetails?.data?.porject_img2} />
            </div>
            <div>
              <img src={projectDetails?.data?.porject_img3} />
            </div>
          </Carousel>
        </div>

        <div className="productDetailDevSecond">
          {/*          <p className='mb-0'>{category}</p>
                    <h4 className='mb-2'>{name}</h4>
                    <p className=' mb-0'>
                        <small>4.5 </small>
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: 'gray', width: '13px' }} />
                        <small> (27) </small>
                        <small>&nbsp; <span data-bs-toggle="modal" data-bs-target="#writeAReview" className='review-btn'>Write a review</span></small>
                        <CreateReview productDetails={productDetails} />
                    </p> */}
          {/* <p className='product-dev-p pt-2'>
                        {
                            productDetails.offerPrice ?
                                <h4>
                                    <span style={{ fontSize: '14px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>
                                    <span>{offerPrice}.00 &nbsp;</span>

                                    <span style={{ fontSize: '13px', fontFamily: "Optima", fontWeight: 'bold', color: 'gray', textDecoration: 'line-through 1px' }}>৳ {productDetails.ragularPrice}.00</span>
                                </h4>
                                :
                                <span><span style={{ fontSize: '15px', fontFamily: "Optima", fontWeight: 'bold' }}>৳</span>{productDetails.ragularPrice}.00</span>
                        }
                    </p> */}

          <div className="attar-detail-dev-table">
            {/*    <div className='d-flex '>
                            <div className="">
                                <p>Brand:</p>
                                <p>Weight:</p>
                                <p>Availability:</p>
                            </div>
                            <div style={{ marginLeft: '120px' }}>
                                <p>{productDetails.brand}</p>
                                <p>{weight1} ML</p>
                                <p>{availableQuantity} Pcs</p>
                            </div>
                        </div> */}
          </div>

          <div className="mt-3">
            <p className="mb-2">Quantity:</p>
            {/*   <div className='attar-detail-quantity-counter'>
                            <div className='attar-detail-quantity-counter-p'>
                                <p style={{ color: 'gray' }} className='m-0 fw-bold'> {count} </p>
                            </div>
                            <div className='d-grid attar-detail-quantity-counter-dev'>
                                <button onClick={increment} className='p-0' disabled={count === 10}>
                                    <i style={{ color: 'gray' }} className="fa fa-angle-up px-2 "></i>
                                </button>
                                <button onClick={decrement} classnamep='p-0' disabled={count === 1}>
                                    <i style={{ color: 'gray' }} className="fa fa-angle-down px-2"></i>
                                </button>
                            </div>
                        </div> */}
          </div>
          {/*   {
                        availableQuantity < 1 ?
                            <div className='mt-4'><button className='outOfStock-btn' disabled>Out Of Stock</button></div>
                            :
                            <div className='mt-4' >
                                <Link to='/shopping_cart' onClick={() => handleAddToCard(productDetails)} ><button className='add-to-cart mb-3'>Buy Now</button></Link> &nbsp; &nbsp; &nbsp;
                                <button className='add-to-cart' onClick={() => handleAddToCard(productDetails)}>Add to Cart</button>
                                 <button className='add-to-cart' onClick={() => handleAddToCard(productDetails)}>Add to Cart</button> 
                            </div>
                    } */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
