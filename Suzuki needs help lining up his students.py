def lineup_students(st):
    return sorted(st.split(),key=lambda s:(len(s),s),reverse=True)
