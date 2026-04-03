const encryption = (message) => message.split(" ").map(v1 => v1.split("").map(v2 => CHAR_TO_MORSE[v2]).join(" ")).join("   ")
