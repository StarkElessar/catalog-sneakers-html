document.addEventListener('DOMContentLoaded', () => {
  const catalogWrapper = document.querySelector('.catalog__list')
  const favoritesBtn = document.querySelector('.product-card__favorites')
  const addToCartBtn = document.querySelector('.product-card__add-cart')

  catalogWrapper.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.closest('.product-card__favorites')) {
      target.closest('.product-card__favorites').classList.toggle('active')
    }
    if (target && target.closest('.product-card__add-cart')) {
      target.closest('.product-card__add-cart').classList.toggle('active')
    }
  })
})