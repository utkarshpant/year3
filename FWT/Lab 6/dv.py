with open("research.txt", "r+") as text:
    for line in text.read():
        for word in line:
            with open("dataset.txt", "x") as dataset:
                dataset.write(word + ",\n")
