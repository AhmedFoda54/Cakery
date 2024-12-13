'use client';
import Image from 'next/image';
import { AddToCart } from './productCard';
import productbig1 from '../../img/shop/details/productbig1.jpg';
import productbig2 from '../../img/shop/details/productbig2.jpg';
import productbig3 from '../../img/shop/details/productbig3.jpg';

export const addBtn = {
  fontsize: '14px',
  border: 'none',
  background: '#f08632',
  color: 'white',
  height: '50px',
  width: '140px',
  fontFamily: 'Montserrat-Regular , sans-serif, Helvetica',
};

/**
 * A component for displaying product details, including the product image, name, description, price, and a quantity input with + and - buttons, and an "Add to cart" button.
 * @param {object} product - The product object, including the product ID, name, description, price, and category.
 * @param {string} selectedImage - The URL of the selected image.
 * @param {function} handleThumbnailClick - A function to call when a thumbnail is clicked.
 * @param {number} quantity - The current quantity of the product in the cart.
 * @param {function} handleQuantityChange - A function to call when the quantity input changes.
 * @returns {ReactElement} The component.
 */
export default function ProductDetails({
  product,
  selectedImage,
  handleThumbnailClick,
  quantity,
  handleQuantityChange,
}) {
  return (
    <>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__img">
                <div className="product__details__big__img">
                  <a href={selectedImage} className="your-popup-class">
                    <Image
                      className="big_img"
                      width={100}
                      height={300}
                      src={selectedImage}
                      alt="Product Image"
                    />
                  </a>
                </div>
                <div className="product__details__thumb">
                  {[productbig1, productbig2, productbig3].map(
                    (image, index) => (
                      <div
                        key={index}
                        className="pt__item"
                        onClick={() => handleThumbnailClick(image)}
                      >
                        <a href="#" className="your-popup-class">
                          <Image
                            src={image}
                            width={100}
                            height={100}
                            alt={`Thumbnail ${index + 1}`}
                          />
                        </a>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <div className="product__label">{product.category}</div>
                <h4>{product.name}</h4>
                <h5>${product.price}</h5>
                <p>{product.description}</p>
                <div className="product__details__option">
                  <div className="quantity d-flex align-items-center">
                    <div className="pro-qty d-flex">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleQuantityChange('decrement')}
                        style={{ border: 'none', background: 'transparent' }}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="quantity-input mx-2 text-center"
                        style={{ width: '40px', border: 'none' }}
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleQuantityChange('increment')}
                        style={{ border: 'none', background: 'transparent' }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    style={addBtn}
                    onClick={() => AddToCart(product.productid, quantity)}
                    href="/cart"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
