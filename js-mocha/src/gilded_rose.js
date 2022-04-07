class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name == 'Sulfuras, Hand of Ragnaros') return

      item.sellIn = item.sellIn - 1;

      if (item.name == 'Aged Brie') {
        this.increaseQuality(item)
        if (item.sellIn < 0) {
          this.increaseQuality(item)
        }
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(item)
        if (item.sellIn < 10) {
          this.increaseQuality(item)
        }
        if (item.sellIn < 5) {
          this.increaseQuality(item)
        }
        if (item.sellIn < 0) {
          item.quality = 0
        }
      } else {
        this.decreaseQuality(item)
        if (item.sellIn < 0) {
          this.decreaseQuality(item)
        }
      }
    })

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
