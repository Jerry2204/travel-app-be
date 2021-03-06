const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const fs = require('fs');

chai.use(chaiHttp);

describe('API ENDPOINTS TESTING', () => {
  it('GET Landing Page', (done) => {
    chai
      .request(app)
      .get('/api/landing-page')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('hero');
        expect(res.body.hero).to.have.all.keys(
          'travelers',
          'treasure',
          'cities'
        );
        expect(res.body).to.have.property('mostPicked');
        expect(res.body.mostPicked).to.have.an('array');
        expect(res.body).to.have.property('category');
        expect(res.body.category).to.have.an('array');
        expect(res.body).to.have.property('testimonial');
        expect(res.body.testimonial).to.be.an('object');
        done();
      });
  });

  it('GET Detail Page', (done) => {
    chai
      .request(app)
      .get('/api/detail-page/5e96cbe292b97300fc902225')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('country');
        expect(res.body).to.have.property('isPopular');
        expect(res.body).to.have.property('unit');
        expect(res.body).to.have.property('sumBooking');
        expect(res.body).to.have.property('imageId');
        expect(res.body.imageId).to.have.an('array');
        expect(res.body).to.have.property('featureId');
        expect(res.body.featureId).to.have.an('array');
        expect(res.body).to.have.property('activityId');
        expect(res.body.activityId).to.have.an('array');
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('price');
        expect(res.body).to.have.property('city');
        expect(res.body).to.have.property('description');
        expect(res.body).to.have.property('__v');
        expect(res.body).to.have.property('bank');
        expect(res.body.bank).to.have.an('array');
        expect(res.body).to.have.property('testimonial');
        expect(res.body.testimonial).to.be.an('object');
        done();
      });
  });

  it('POST Booking', (done) => {
    const image = __dirname + '/bukti_bayar.jpeg';
    const dataSample = {
      image,
      itemId: '5e96cbe292b97300fc902225',
      duration: 2,
      bookingStartDate: '2022-10-8',
      bookingEndDate: '2022-10-10',
      firstName: 'Zico Andreas',
      lastName: 'Aritonang',
      email: 'cuexx@gmail.com',
      phoneNumber: '+6282167922417',
      accountHolder: 'Zico',
      bankFrom: 'BNI',
    };
    chai
      .request(app)
      .post('/api/booking')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('itemId', dataSample.itemId)
      .field('duration', dataSample.duration)
      .field('bookingStartDate', dataSample.bookingStartDate)
      .field('bookingEndDate', dataSample.bookingEndDate)
      .field('firstName', dataSample.firstName)
      .field('lastName', dataSample.lastName)
      .field('email', dataSample.email)
      .field('phoneNumber', dataSample.phoneNumber)
      .field('accountHolder', dataSample.accountHolder)
      .field('bankFrom', dataSample.bankFrom)
      .attach('image', fs.readFileSync(dataSample.image), 'bukti_bayar.jpeg')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('Booking success');
        expect(res.body).to.have.property('booking');
        expect(res.body.booking).to.have.all.keys(
          'payments',
          '_id',
          'invoice',
          'bookingStartDate',
          'bookingEndDate',
          'total',
          'itemId',
          'memberId',
          '__v'
        );
        expect(res.body.booking.payments).to.have.all.keys(
          'status',
          'proofPayment',
          'bankFrom',
          'accountHolder'
        );
        expect(res.body.booking.itemId).to.have.all.keys(
          '_id',
          'title',
          'price',
          'duration'
        );
        console.log(res.body.booking);
        done();
      });
  });
});
