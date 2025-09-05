const fingers = [ 'Pinkie', 'Ring', 'Middle', 'Index', 'Thumb' ]
const binaryFingers = binString => fingers.filter((f, i) => binString.padStart(5,'0')[i] == '1')
