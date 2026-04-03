import numpy as np
def better_than_average(class_points, your_points):
    return True if your_points>=np.mean(class_points) else False
