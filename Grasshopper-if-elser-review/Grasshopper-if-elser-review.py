def main(input_str):
    return forward() if input_str=="forward" else backward() if input_str=="backward" else "Not a valid input."
