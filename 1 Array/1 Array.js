function upArray(arr){
  const fil1 = arr.length > 0;
    const fil2 = arr.every(s => s.toString().length === 1);
    if (fil1 && fil2) {
        const str1 = arr.join('');
        const str2 = (BigInt(str1) + BigInt(1)).toString().padStart(str1.length, '0');
        return Array.from(str2, Number);
    } else {
        return null;
    }
}
