# CORRIGÉ PROF — conversions de bases
def binaire_vers_decimal(bits):
    valeur = 0
    for c in bits:
        valeur = valeur * 2 + int(c)
    return valeur

def decimal_vers_binaire(n):
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits
        n = n // 2
    return bits

assert binaire_vers_decimal("1101") == 13
assert binaire_vers_decimal("100000") == 32
assert binaire_vers_decimal("0") == 0
assert decimal_vers_binaire(13) == "1101"
assert decimal_vers_binaire(32) == "100000"
assert decimal_vers_binaire(255) == "11111111"
print("Tout est OK — bravo !")
