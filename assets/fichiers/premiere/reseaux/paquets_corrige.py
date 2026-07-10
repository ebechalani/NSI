# CORRIGÉ PROF — paquets
def decouper(message, taille, src, dst):
    paquets = []
    num = 0
    for i in range(0, len(message), taille):
        paquets.append({"src": src, "dst": dst, "num": num, "data": message[i:i + taille]})
        num = num + 1
    return paquets

def reconstituer(paquets):
    dans_l_ordre = sorted(paquets, key=lambda p: p["num"])
    message = ""
    for p in dans_l_ordre:
        message = message + p["data"]
    return message

p = decouper("BONJOUR NSI", 4, "1.2.3.4", "5.6.7.8")
assert len(p) == 3 and p[0]["data"] == "BONJ" and p[2]["num"] == 2
melange = [p[2], p[0], p[1]]
assert reconstituer(melange) == "BONJOUR NSI"
print("Tout est OK — bravo !")
