const hide = word => '*'.repeat(word.length);
const highlight = word => '**' + word + '**';

const censor = sentence => {
  const hasWaffle = /waffles|crepes|blintzes/i.test(sentence);
  
  return sentence.replace(/pancakes|flapjacks|slapjacks|hotcakes/gi, hide)
                 .replace(/waffles|crepes|blintzes/gi, highlight)
                 .replace(/syrup|honey|jam|butter|chocolate|margarine/gi, hasWaffle ? highlight : hide);
}
