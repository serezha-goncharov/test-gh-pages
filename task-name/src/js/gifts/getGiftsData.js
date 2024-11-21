export const getGiftsData = async () => {
  const result = await fetch(`${import.meta.env.BASE_URL}/gifts.json`);
  return await result.json();
};







