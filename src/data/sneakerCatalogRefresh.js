// Preserve the first eight live sneaker cards selected by the owner.
// Fresh replacement cards can be added after these with new product identities.
export const RETAINED_SNEAKER_IDS = [47, 126, 127, 128, 48, 49, 50, 129]
const retiredSneakerIds = new Set(["51", "52", "130", "131", "53", "54", "55", "132", "56", "57", "58", "133", "134", "59", "135", "136", "60", "61", "62", "63", "64", "137", "65", "66", "138", "139", "140", "141", "142", "143", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109"])

export function isRetiredSneaker(product) {
  return product.category === 'Sneakers' && retiredSneakerIds.has(String(product.id))
}
