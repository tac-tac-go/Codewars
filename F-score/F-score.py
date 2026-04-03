def f(tp, fp, tn, fn):
    precision = 0 if (tp+fp) == 0 else (tp/(tp+fp))
    recall = 0 if (tp+fn) == 0 else (tp/(tp+fn))
    return 0.5 if (tp+fp)==0 and (tp+fn)==0  else 0 if (tp+fp)==0 or (tp+fn)==0 else (2*precision*recall)/(precision+recall) if (precision+recall)!=0 else 0
