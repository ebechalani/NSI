"""Crible d'Ératosthène — boîte noire (corrigé)."""


def crible(n):
    """Renvoie la liste des nombres premiers <= n."""
    est_premier = [True] * (n + 1)
    est_premier[0] = est_premier[1] = False
    for i in range(2, int(n ** 0.5) + 1):
        if est_premier[i]:
            for multiple in range(i * i, n + 1, i):
                est_premier[multiple] = False
    return [i for i in range(n + 1) if est_premier[i]]


if __name__ == "__main__":
    print(crible(30))
