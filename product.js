pjs.config({
  options    : 'stdout',
  log        : 'stdout',
  format     : 'json',
  writer     : 'file',
  outFile    : 'output.json'
});

var urls = ['http://www.mq.se/article/angelica_scarf?attr1_id=7174'];

pjs.addSuite({
    // single URL or array
    url: urls,
    // single function or array, evaluated in the client
    scraper: function() {

			var codeP = $('#art_no').text().replace('Artikelnummer: ', ';');
			var priceP = $('#price').text().replace(':-', '');

      product = {
        code        : codeP ,
        description : $('#desc').text(),
        image       : $('#mainimage').attr('src'),
        price       : priceP ,
        title       : $('#name h2').text(),
      };

			return product;
    }
});
