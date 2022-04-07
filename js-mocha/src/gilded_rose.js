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

  update() {
    this.sellIn = this.sellIn - 1;
  }
}

class AgedBrie extends Item {
  update() {
    super.update();
    this.increaseQuality()
    if (this.sellIn < 0) {
      this.increaseQuality()
    }
  }
}

class BackstagePasses extends Item {
  update() {
    super.update();
    this.increaseQuality()
    if (this.sellIn < 10) {
      this.increaseQuality()
    }
    if (this.sellIn < 5) {
      this.increaseQuality()
    }
    if (this.sellIn < 0) {
      this.quality = 0
    }
  }
}

class Sulfuras extends Item {
  update() {
  }
}

class NormalItem extends Item {
  update() {
    super.update();
    this.decreaseQuality()
    if (this.sellIn < 0) {
      this.decreaseQuality()
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
      item.update()
    })

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
  AgedBrie,
  BackstagePasses,
  Sulfuras,
  NormalItem
}
