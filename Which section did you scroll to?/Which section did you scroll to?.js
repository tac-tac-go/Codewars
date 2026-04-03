const getSectionIdFromScroll = (y, s,t=0) => s.findIndex(e=>(t+=e)>y);
