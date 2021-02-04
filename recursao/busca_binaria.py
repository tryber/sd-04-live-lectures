'''
1. pensar casos base
2. como reduzir nosso input pra ele se aproximar de um caso base
3. recursão
'''

def encontrar(palheiro, agulha, posicao=0):
    if not palheiro:
        return None
    primeiro = palheiro[0]
    restante = palheiro[1:]
    if primeiro == agulha:
        return posicao 
    else:
        return encontrar(restante, agulha, posicao+1)

def encontrar(palheiro, agulha, inicio=0, fim=None):
    if not palheiro:
        return None

    fim = fim if fim is not None else len(palheiro) 

    print(inicio, fim, palheiro[inicio:fim])

    if len(palheiro[inicio:fim]) == 2:
        if palheiro[inicio] == agulha:
            return inicio
        elif palheiro[inicio+1] == agulha:
            return inicio+1
        else:
            return None
    
    if inicio == fim:
        return inicio if palheiro[inicio] == agulha else None

    indice_do_meio =  (inicio + fim) // 2
    meio = palheiro[indice_do_meio]

    if meio >= agulha:
        return encontrar(palheiro, agulha, inicio, indice_do_meio+1) 
    else:
        return encontrar(palheiro, agulha, indice_do_meio, fim)



assert encontrar([1, 2, 3, 4, 4, 4, 6, 6, 7], 6) == 6
assert encontrar([1, 2, 3, 4, 4, 4, 6, 6, 7], 7) == 8
assert not encontrar([1, 2, 3, 4, 4, 4, 6, 6, 7], 7) == 2
assert encontrar([1, 2, 3, 4, 4, 4, 6, 6, 7], 9) is None
