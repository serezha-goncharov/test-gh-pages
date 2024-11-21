import { getGiftsData } from './getGiftsData.js';
import { shuffleGifts } from './shuffleGifts.js';
import { createGiftItems } from './createGiftItems.js';

const gifts = await getGiftsData();
export const shuffledGifts = shuffleGifts(gifts);
export const bestGifts = shuffledGifts.slice(0, 4);
export const giftsContainer = document.querySelector('.gift__items');

giftsContainer.innerHTML = window.location.href.includes('/gifts/')
  ? createGiftItems(shuffledGifts)
  : createGiftItems(bestGifts);
