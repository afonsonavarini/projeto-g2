import random

seed = 0
symbols = []
done = False

for i in range(3):
    random_symbol = random.randint(0, 2)
    if random_symbol == 0:
        symbol = "+"
    elif random_symbol == 1:
        symbol = "-"
    elif random_symbol == 2:
        symbol = "*"
    else:
        symbol = "/"
    symbols.append(symbol)


if seed == 0:
    n1 = random.randint(1, 10)
    n2 = random.randint(1, 10)
    n3 = random.randint(1, 10)
    n4 = random.randint(1, 10)

    formula = f"{n1} {symbols[0]} ( {n2} {symbols[1]} {n3}) {symbols[2]} {n4}"

    # RESPONDE PARENTESES PRIMEIRO

    while True:
        if symbols[1] == "+":
            parenteses = n2 + n3
            break
        elif symbols[1] == "-":
            parenteses = n2 - n3
            break
        elif symbols[1] == "*":
            parenteses = n2 * n3
            break
        else:
            parenteses = n2 / n3
            break
    #################################
    while True:
        if symbols[0] == "+":
            parenteses = n1 + parenteses
            break
        elif symbols[0] == "-":
            parenteses = n1 - parenteses
            break
        elif symbols[0] == "*":
            parenteses = n1 * parenteses
            break
        else:
            parenteses = n1 / parenteses
            break

        ################################
    while True:
        if symbols[2] == "+":
            resposta = parenteses + n4
            break
        elif symbols[2] == "-":
            resposta = parenteses - n4
            break
        elif symbols[2] == "*":
            resposta = parenteses * n4
            break
        else:
            resposta = parenteses / n4
            break

if seed == 1:
    pass
    # OUTRA FORMULA AQUI E POR AI VAI

print(formula, '=', resposta)
