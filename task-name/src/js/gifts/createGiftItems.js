export const createGiftItems = gifts => {
  const result = [];
  gifts.forEach(gift => {
    const tag = gift.category.split(' ').at(-1).toLowerCase();
    result.push(`
      <div class="gift__item">
        <img class="gift__item-image" src="${import.meta.env.BASE_URL}/img/gift-for-${tag}.png"
             alt="x-mas tree ball with transparent glass and pink gift box inside and golden ribbon">
        <div class="gift__item-info">
          <h4 class="h4-header gift__item-tag" data-label="For ${tag}">For ${tag}</h4>
          <h3 class="h3-header gift__item-name">${gift.name}</h3>
        </div>
      </div>
    `);
  });
  return result.join('');
};