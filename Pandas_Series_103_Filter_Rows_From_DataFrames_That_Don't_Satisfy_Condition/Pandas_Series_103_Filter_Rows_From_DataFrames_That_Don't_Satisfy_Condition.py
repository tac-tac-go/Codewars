import pandas as pd
import numpy as np

def filter_dataframe(dataframe, col, func): 
    return dataframe[~np.array(list(map(func,dataframe[col])))]
