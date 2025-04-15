const sharePrice = (invested, changes) => changes.reduce((i,p) => i+(p/100)*i,invested).toFixed(2)

