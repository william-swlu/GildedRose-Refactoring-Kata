var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
// describe("Gilded Rose", function() {

//   it("should foo", function() {
//     const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).to.equal("fixme");
//   });

// });

describe("Gilded Rose", function() {

  it("quality_never_is_negative", function() {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality()
    const isEveryItemNotNegative = items.every(item => item.quality >= 0)
    expect(isEveryItemNotNegative).to.equal(true);
  });

  it('sulfuras could not be sold', () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).to.equal(10);
  })

  it('sulfuras could not decrease quality', () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(10);
  })

  it('quality could not be more than fifty', () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(50);
  })

  it('item with date passed quality decrease by twice', () => {
    const gildedRose = new Shop([new Item("foo", -1, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(38);
  })

  it('aged brie increase quality when it gets older', () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(41);
  })

  it('aged brie increase by two quality when date passed', () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(42);
  })

  it('aged brie increase by two quality when date passed and not more than fifty', () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(50);
  })

  it('backstage passes increase quality by two when sellin less than ten', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(42);
  })

  it('backstage passes increase quality by two when sellin less than six', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(42);
  })

  it('backstage passes increase quality by three when sellin less than five', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(43);
  })

  it('backstage passes increase quality by two when sellin less than six and not more than fifty', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(50);
  })

  it('backstage passes increase quality by three when sellin less than five and not more than fifty', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(50);
  })

  it('backstage passes quality drops to zero after concert', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(0);
  })

  it('backstage passes quality increase quality by one when date is more than 10', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(41);
  })

});