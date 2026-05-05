export const STORE_IMAGE_PATHS = {
	jewelry: '/images/imagesforeachstore/1%20Jewelry.png',
	cosmetics: '/images/imagesforeachstore/1%20Cosmetics.png',
	perfumes: '/images/imagesforeachstore/1%20Perfumes.png',
	womensApparel: '/images/imagesforeachstore/1%20Womens%20Apparel.png',
	mensApparel: '/images/imagesforeachstore/1%20Mens%20Apparel.png',
	coffee: '/images/imagesforeachstore/1%20Coffee.png',
	pets: '/images/imagesforeachstore/1%20Pets.png',
	homeAndGarden: '/images/imagesforeachstore/1%20Home%20and%20Garden.png',
	travel: '/images/imagesforeachstore/1%20Travel.png',
	skincare: '/images/imagesforeachstore/1%20Skincare.png',
	wigs: '/images/imagesforeachstore/1%20Wigs.png',
};

export const STORE_CATALOG = [
	{
		name: 'Ladidier Jewelry',
		category: 'Jewelry',
		status: 'Live',
		url: 'http://ladidierjewelry.com',
		image: STORE_IMAGE_PATHS.jewelry,
	},
	{
		name: 'Ladidier Cosmetics',
		category: 'Cosmetics',
		status: 'Live',
		url: 'https://ladidiercosmetics.com',
		image: STORE_IMAGE_PATHS.cosmetics,
	},
	{
		name: 'The Scnt Shop',
		category: 'Perfumes',
		status: 'Live',
		url: 'https://thescntshop.com',
		image: STORE_IMAGE_PATHS.perfumes,
	},
	{
		name: 'Adeva Store',
		category: 'Womens Apparel',
		status: 'Live',
		url: 'http://www.adevastore.com',
		image: STORE_IMAGE_PATHS.womensApparel,
	},
	{
		name: 'Ladidier Homme',
		category: 'Mens Apparel',
		status: 'Live',
		url: 'http://www.ladidierhomme.com',
		image: STORE_IMAGE_PATHS.mensApparel,
	},
	{
		name: 'Piata Noir Roast',
		category: 'Coffee',
		status: 'Live',
		url: 'https://piatanoirroast.com',
		image: STORE_IMAGE_PATHS.coffee,
	},
	{
		name: 'Posh Paw Pet Supplies',
		category: 'Pets',
		status: 'Live',
		url: 'https://poshpawpetsupplies.com',
		image: STORE_IMAGE_PATHS.pets,
	},
	{
		name: 'Ladidier Maison',
		category: 'Home & Garden',
		status: 'Live',
		url: 'https://ladidiermaison.com',
		image: STORE_IMAGE_PATHS.homeAndGarden,
	},
	{
		name: 'Just Rippin',
		category: 'Travel',
		status: 'Live',
		url: 'https://justrippin.net',
		image: STORE_IMAGE_PATHS.travel,
	},
	{
		name: 'Ladidier Beauty Essence',
		category: 'Skincare',
		status: 'Live',
		url: 'http://ladidierbeautyessence.store',
		image: STORE_IMAGE_PATHS.skincare,
	},
	{
		name: 'Merry Wigs',
		category: 'Wigs',
		status: 'Live',
		url: 'http://www.merrywigs.com',
		image: STORE_IMAGE_PATHS.wigs,
	},
];

export const PRIMARY_STORE_URL = STORE_CATALOG[0].url;

export function getStoreUrl(storeName) {
	return STORE_CATALOG.find((store) => store.name === storeName)?.url ?? PRIMARY_STORE_URL;
}

export function getStoreByName(storeName) {
	return STORE_CATALOG.find((store) => store.name === storeName) ?? STORE_CATALOG[0];
}
