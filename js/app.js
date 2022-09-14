document.addEventListener('DOMContentLoaded', () => {
  const catalogWrapper = document.querySelector('.catalog__list')
  const searchPanel = document.querySelector('input[name="search-input"]')
  const allProducts = document.querySelectorAll('.catalog__item')

  catalogWrapper.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.closest('.product-card__favorites')) {
      target.closest('.product-card__favorites').classList.toggle('active')
    }
    if (target && target.closest('.product-card__add-cart')) {
      target.closest('.product-card__add-cart').classList.toggle('active')
    }
  })

  searchPanel.addEventListener('input', function (e) {
    const searchValue = this.value.toLowerCase()

    allProducts.forEach((product) => {
      const productTitle = product.querySelector('.product-card__title').innerText.toLowerCase()

      if (searchValue !== '') {
        product.style.display = productTitle.indexOf(searchValue) > -1
          ? 'block'
          : 'none'
      } else {
        product.style.display = 'block'
      }
    })
  })
})