class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }

  decreaseQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
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
        item.increaseQuality()
        if (item.sellIn < 0) {
          item.increaseQuality()
        }
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        item.increaseQuality()
        if (item.sellIn < 10) {
          item.increaseQuality()
        }
        if (item.sellIn < 5) {
          item.increaseQuality()
        }
        if (item.sellIn < 0) {
          item.quality = 0
        }
      } else {
        item.decreaseQuality()
        if (item.sellIn < 0) {
          item.decreaseQuality()
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
