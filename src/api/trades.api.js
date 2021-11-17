import instance from './instance';

export const fetchHottestCards = () =>
  instance
    .get('/card/sub-categories')
    .then(({data}) => {
      const cardSubCategories = data?.cardSubCategories ?? [];
      const container = {};

      cardSubCategories.forEach(sub => {
        const {cardCategory} = sub;
        const obj = container[cardCategory?.id];
        if (!obj) {
          container[cardCategory?.id] = sub;
        }
        if (
          !!obj &&
          obj !== undefined &&
          'rate' in obj &&
          obj?.rate < sub?.rate
        ) {
          container[cardCategory?.id] = sub;
        }
      });
      const full = Object.keys(container).map(key => container[key]);
      full.sort((a, b) => parseFloat(b?.rate) - parseFloat(a?.rate));
      return full.slice(0, 15);
    });

export const fetchCards = () =>
  instance
    .get('/card/categories')
    .then(({data}) => {
      // console.log({data});
      const cardCategories = data?.cardCategories ?? [];
      return cardCategories;
    });

export const fetchCardsSubCategory = (id) =>
  instance
    .get(`/card/category-sub-categories/${id}`)
    .then(({data}) => {
      // console.log({data});
      const categorySubCategories = data?.categorySubCategories ?? [];
      return categorySubCategories;
    });
