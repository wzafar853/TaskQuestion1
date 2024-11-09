describe('Automation Task tests ', () => {
 
    it('Question 1 API Testing Assignment', () => {
        // Send a GET request to the URL'https://httpbin.org/json'
        cy.request('https://httpbin.org/json').then((response) => {
        // Verify that the status code is 200
        expect(response.status).to.eq(200);

        // Verify that the response contains a 'slideshow' key
        expect(response.body).to.have.property('slideshow');

        // Verify that the 'slides' key exists within the 'slideshow' object
        expect(response.body.slideshow).to.have.property('slides').and.be.an('array');

        // Find the slide that contains the 'items' array
        const slideWithItems = response.body.slideshow.slides.find(slide => slide.items);

        // Verify that the 'items' array is present and not empty
        expect(slideWithItems).to.have.property('items').and.be.an('array').that.is.not.empty;
      });

    });  
});