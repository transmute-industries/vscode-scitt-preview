const fs = require('fs');
const cbor = require('cbor');

(async ()=>{
	const example = cbor.encode({
		message: '⌛ My lungs taste the air of time blown past falling sands ⌛'
	});
	fs.writeFileSync('exampleFiles/example.cbor', example);
})();

