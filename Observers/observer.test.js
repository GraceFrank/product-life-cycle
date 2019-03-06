const Observer = require('./Observer');

const Producer = new Observer('Producer');
const Retailer = new Observer('Retailer');

Producer.subscribe(Retailer);
Retailer.subscribe(Producer);

describe('test that producer and retailer are observers of each other', ()=>{
  test('that producer is subscribed to retailer', ()=>{
    expect(Producer.observer).toEqual(Retailer);
  });
});

