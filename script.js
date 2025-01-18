// JavaScript for enhancing user experience
document.addEventListener('DOMContentLoaded', () => {
  const productItems = document.querySelectorAll('.product-item img');
  productItems.forEach(item => {
    item.addEventListener('click', () => {
      alert('You clicked on a product!');
    });
  });
});
