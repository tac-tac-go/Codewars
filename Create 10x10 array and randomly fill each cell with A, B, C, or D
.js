const _ = require('lodash')

function array10(){
	return Array(10).fill(`ABCDABCDAB`.split('')).map(_.shuffle)
}
