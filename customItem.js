var itemId = 2001;
var itemName = "Cocaine";


ModPE.setItem(itemId, "cocaine.png", 0, itemName, 99);
Item.setCategory(ItemCategory.INTERNAL)

function useItem(x, y, z, item, block, side){
  addItemInventory(itemId, 1, 0);
}
